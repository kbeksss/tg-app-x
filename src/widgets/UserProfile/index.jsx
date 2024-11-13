import React, { useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import UserInfo from './ui/UserInfo.jsx'
import { Recommendations } from '@widgets'
import ConfirmSubscribe from './ui/ConfirmSubscribe.jsx'

const UserProfile = () => {
    const [isConfirmSubscribe, setIsConfirmSubscribe] = useState(false)
    const [subscribed, setSubscribed] = useState(false)
    const toggleSubscribe = () => {
        subscribed ? setSubscribed(false) : setIsConfirmSubscribe(true)
    }
    const onConfirmSubscribe = () => {
        setSubscribed(true)
        setIsConfirmSubscribe(false)
    }
    return (
        <Box>
            <UserInfo
                subscribed={subscribed}
                toggleSubscribe={toggleSubscribe}
            />
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
