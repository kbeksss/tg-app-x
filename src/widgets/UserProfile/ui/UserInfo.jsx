import React, { useMemo } from 'react'
import { Avatar, Box, Button, Grid2, Stack, Typography } from '@mui/material'
import { Iconify, ProfileInfo } from '@shared/ui'
import { useTg } from '@shared/hooks/useTg.js'

const UserInfo = ({
    subscribed,
    toggleSubscribe,
    name,
    username,
    image,
    toggleDisabled,
}) => {
    const { isDark } = useTg()
    const subscribeColors = useMemo(() => {
        if (isDark) {
            return subscribed
                ? { backgroundColor: 'darkVersion.lightGrey', color: 'white' }
                : { backgroundColor: 'darkVersion.green', color: 'black' }
        } else {
            return subscribed
                ? { backgroundColor: 'secondary.main', color: 'text.secondary' }
                : { backgroundColor: 'primary.main', color: 'white' }
        }
    }, [subscribed])
    return (
        <Box sx={{ px: 2 }}>
            <ProfileInfo avatar={image} name={name} username={username} />
            <Box sx={{ pt: 3 }}>
                <Button
                    fullWidth
                    disabled={toggleDisabled}
                    onClick={toggleSubscribe}
                    sx={subscribeColors}
                    variant={'contained'}>
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </Button>
            </Box>
        </Box>
    )
}

export default UserInfo
