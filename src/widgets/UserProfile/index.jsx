import React, { useMemo, useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import UserInfo from './ui/UserInfo.jsx'
import { Recommendations, UserSubscribe } from '@widgets'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import {
    useFetchUserQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} from '@shared/api/services/index.js'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const [isSubscribing, setIsSubscribing] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()
    const [followUser, { isLoading: followLoading }] = useFollowUserMutation()
    const [unfollowUser, { isLoading: unfollowLoading }] =
        useUnfollowUserMutation()
    const account = useSelector((state) => state.account)
    const { data: user } = useFetchUserQuery({ id })
    const isSubscribed = useMemo(() => {
        return user
            ? !!user?.Followers.find((u) => u.accountId === account?.id)
            : false
    }, [user, account])
    const toggleSubscribe = async () => {
        isSubscribed
            ? await unfollowUser({ id: user.id })
            : setIsSubscribing(true)
    }
    return (
        <Box>
            {user && (
                <UserInfo
                    image={user.image}
                    username={user.username}
                    name={user?.name}
                    toggleDisabled={followLoading || unfollowLoading}
                    subscribed={isSubscribed}
                    toggleSubscribe={toggleSubscribe}
                />
            )}

            <Box sx={{ px: 2, pt: 3 }}>
                <Typography variant={'h6'} color={'text.primary'}>
                    Latest recommendations
                </Typography>
            </Box>
            <Divider
                sx={{
                    mt: 1,
                    mb: 3,
                    opacity: 0.3,
                    borderColor: 'text.primary',
                }}
            />
            <Box sx={{ px: 2 }}>
                {user && (
                    <Recommendations
                        username={user?.username}
                        avatarImg={user?.image}
                    />
                )}
            </Box>
            <UserSubscribe
                followUser={followUser}
                user={user}
                isSubscribing={isSubscribing}
                setIsSubscribing={setIsSubscribing}
            />
        </Box>
    )
}

export default UserProfile
