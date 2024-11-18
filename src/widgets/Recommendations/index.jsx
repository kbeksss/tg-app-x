import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import RecItem from './ui/RecItem.jsx'
import { useLazyFetchTweetsQuery } from '@shared/api/services/tweetsService.js'
import InfiniteScroll from 'react-infinite-scroll-component'

const Recommendations = ({ avatarImg, username }) => {
    const [tweets, setTweets] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const limit = 10
    const [fetchTweets] = useLazyFetchTweetsQuery()

    const loadMore = async () => {
        try {
            const response = await fetchTweets({
                limit,
                offset,
                username,
            }).unwrap()
            const newTweets = response.tweets

            setTweets((prevTweets) => [...prevTweets, ...newTweets])
            if (newTweets.length < limit) {
                setHasMore(false)
            }

            setOffset((prev) => prev + limit)
        } catch (error) {
            console.error('Failed to fetch tweets:', error)
            setHasMore(false)
        }
    }

    useEffect(() => {
        if (!username) {
            return
        }
        loadMore()
    }, [username])
    return (
        <InfiniteScroll
            dataLength={tweets.length}
            next={loadMore}
            hasMore={hasMore}
            scrollableTarget='scrollableDiv'
            loader={<h4>Loading...</h4>}>
            <Stack spacing={2}>
                {tweets?.map((tweet) => (
                    <RecItem
                        key={tweet.id}
                        image={avatarImg}
                        text={tweet.text}
                        author={tweet.name}
                        date={tweet.created_at}
                    />
                ))}
            </Stack>
        </InfiniteScroll>
    )
}

export default Recommendations
