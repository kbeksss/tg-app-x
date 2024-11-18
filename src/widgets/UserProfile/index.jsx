import React, { useEffect, useMemo, useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import UserInfo from './ui/UserInfo.jsx'
import { Recommendations } from '@widgets'
import ConfirmSubscribe from './ui/ConfirmSubscribe.jsx'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'
import {
    useFetchUserQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} from '@shared/api/services/index.js'
import { useSelector } from 'react-redux'
import { notify } from '@shared/utils/functions/index.js'

const UserProfile = () => {
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
    const [isConfirmSubscribe, setIsConfirmSubscribe] = useState(false)
    const toggleSubscribe = async () => {
        isSubscribed
            ? await unfollowUser({ id: user.id })
            : setIsConfirmSubscribe(true)
    }
    const onConfirmSubscribe = async () => {
        const { error } = await followUser({ id: user.id })
        if (error) {
            notify({ type: 'error', msg: 'Follow error' })
            return
        }
        setIsConfirmSubscribe(false)
        navigate(`${paths.userSubscribeSuccess}/${id}`)
    }
    return (
        <Box>
            {user && (
                <UserInfo
                    image={user.image}
                    username={user.username}
                    name={user.name}
                    toggleDisabled={followLoading || unfollowLoading}
                    subscribed={isSubscribed}
                    toggleSubscribe={toggleSubscribe}
                />
            )}

            <Box sx={{ px: 2, pt: 3 }}>
                <Typography variant={'h6'}>Latest recommendations</Typography>
            </Box>
            <Divider sx={{ mt: 1, mb: 3, borderColor: 'rgba(0,0,0,0.3)' }} />
            <Box sx={{ px: 2 }}>
                <Recommendations
                    username={user?.username}
                    avatarImg={user?.image}
                />
            </Box>
            <ConfirmSubscribe
                onConfirm={onConfirmSubscribe}
                open={isConfirmSubscribe}
                onClose={() => setIsConfirmSubscribe(false)}
            />
        </Box>
    )
}

export default UserProfile
