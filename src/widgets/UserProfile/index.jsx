import React, { useEffect, useMemo, useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import UserInfo from './ui/UserInfo.jsx'
import { Recommendations } from '@widgets'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import {
    useFetchUserQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} from '@shared/api/services/index.js'
import { useSelector } from 'react-redux'
import { notify } from '@shared/utils/functions/index.js'
import { ConfirmSubscribe } from '@features'
import { SuccessDialog } from '@shared/ui'

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
    const [successOpen, setSuccessOpen] = useState(false)
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
        setSuccessOpen(true)
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
            <ConfirmSubscribe
                onConfirm={onConfirmSubscribe}
                open={isConfirmSubscribe}
                onClose={() => setIsConfirmSubscribe(false)}
            />
            <SuccessDialog
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
                title={'Successfully subscribed'}
                text={`You have successfully subscribed to https://x.com/${user?.username}`}
                actionLabel={'Okay'}
                action={() => setSuccessOpen(false)}
            />
        </Box>
    )
}

export default UserProfile
