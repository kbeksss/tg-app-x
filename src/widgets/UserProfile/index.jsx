import React, { useMemo, useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import UserInfo from './ui/UserInfo.jsx'
import { Recommendations } from '@widgets'
import ConfirmSubscribe from './ui/ConfirmSubscribe.jsx'
import { useParams } from 'react-router'
import { users } from '@_mock/users.js'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'

const UserProfile = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    console.log('id', id)
    const user = useMemo(() => {
        return users.find((u) => u.id === id)
    }, [id])
    console.log('user', user)
    const [isConfirmSubscribe, setIsConfirmSubscribe] = useState(false)
    const [subscribed, setSubscribed] = useState(false)
    const toggleSubscribe = () => {
        subscribed ? setSubscribed(false) : setIsConfirmSubscribe(true)
    }
    const onConfirmSubscribe = () => {
        setSubscribed(true)
        setIsConfirmSubscribe(false)
        navigate(`${paths.userSubscribeSuccess}/${id}`)
    }
    return (
        <Box>
            {user && (
                <UserInfo
                    username={user.username}
                    name={user.name}
                    subscribed={subscribed}
                    toggleSubscribe={toggleSubscribe}
                />
            )}

            <Box sx={{ px: 2, pt: 3 }}>
                <Typography variant={'h6'}>Latest recommendations</Typography>
            </Box>
            <Divider sx={{ mt: 1, mb: 3, borderColor: 'rgba(0,0,0,0.3)' }} />
            <Box sx={{ px: 2 }}>
                <Recommendations />
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
