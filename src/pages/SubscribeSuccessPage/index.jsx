import React, { useMemo } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useParams } from 'react-router'
import { users } from '@_mock/users.js'
import {
    useFetchUserQuery,
    useUnfollowUserMutation,
} from '@shared/api/services/index.js'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'

const SubscribeSuccessPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: user } = useFetchUserQuery({ id })
    const [unfollow] = useUnfollowUserMutation()
    const unfollowHandle = async () => {
        await unfollow({ id: user.id })
        navigate(paths.search)
    }
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ height: 'calc(100vh - 63px)' }}>
            <Stack alignItems={'center'} sx={{ px: 2 }}>
                <img
                    style={{ maxWidth: 80 }}
                    src='/assets/icons/utilities/tick.png'
                    alt=''
                />
                <Typography sx={{ pt: 2 }}>Successfully subscribed!</Typography>
                <Typography align={'center'} color={'text.secondary'}>
                    You have successfully subscribed to https://x.com/
                    {user?.username}
                </Typography>
                <Button
                    sx={{ mt: 4 }}
                    fullWidth
                    onClick={unfollowHandle}
                    variant={'contained'}
                    color={'secondary'}>
                    Unsibscribe
                </Button>
            </Stack>
        </Stack>
    )
}

export default SubscribeSuccessPage
