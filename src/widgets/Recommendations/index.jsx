import React, { useState } from 'react'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import RecItem from './ui/RecItem.jsx'
import { paths } from '@pages/paths.js'
import { useNavigate } from 'react-router-dom'
import { useIntersectionObserver, useQuery } from '@siberiacancode/reactuse'
import { axiosScraperRequest } from '@shared/api/xhr'
import { SCRAPER_TWEETS_URL } from '@shared/api/services/constants.js'

const Recommendations = ({ avatarImg, username }) => {
    const navigate = useNavigate()
    const [tweets, setTweets] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const limit = 10

    const { ref } = useIntersectionObserver({
        threshold: 1,
        onChange: (entry) => {
            if (entry.isIntersecting) setOffset((prev) => prev + limit)
        },
    })
    const { isSuccess } = useQuery(
        () =>
            axiosScraperRequest
                .get(SCRAPER_TWEETS_URL, {
                    params: { username, limit, offset },
                })
                .then((res) => res.data),
        {
            keys: [offset],
            onSuccess: (data) => {
                if (data?.tweets.length < limit) {
                    setHasMore(false)
                }
                setTweets((prev) => [
                    ...prev,
                    ...data?.tweets.filter(
                        (item) =>
                            !prev.some((t) => t.tweet_id === item.tweet_id)
                    ),
                ])
            },
        }
    )
    return (
        <>
            {isSuccess && !tweets.length ? (
                <Stack alignItems={'center'} sx={{ mt: '30px' }}>
                    <img
                        width={135}
                        src='/assets/icons/utilities/no-posts.png'
                        alt=''
                    />
                    <Typography variant={'h5'}>Nothing Yet :(</Typography>
                    <Typography color={'text.secondary'}>
                        The user has not posted anything yet
                    </Typography>
                </Stack>
            ) : (
                <Box>
                    {tweets?.map((tweet, index) => (
                        <Box
                            key={index}
                            sx={{ mb: 3 }}
                            onClick={() =>
                                navigate(`${paths.trade}/${tweet.hash}`)
                            }>
                            <RecItem
                                key={tweet.id}
                                image={avatarImg}
                                text={tweet.text}
                                author={tweet.name}
                                date={tweet.created_at}
                            />
                        </Box>
                    ))}
                    {hasMore && (
                        <Box ref={ref}>
                            <Stack alignItems={'center'}>
                                <CircularProgress />
                            </Stack>
                        </Box>
                    )}
                </Box>
            )}
        </>
    )
}

export default Recommendations
