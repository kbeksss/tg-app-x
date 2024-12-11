import React from 'react'
import { Avatar, Box, Button, Grid2, Stack, Typography } from '@mui/material'
import { Iconify, ProfileInfo } from '@shared/ui'

const UserInfo = ({
    subscribed,
    toggleSubscribe,
    name,
    username,
    image,
    toggleDisabled,
}) => {
    return (
        <Box sx={{ px: 2 }}>
            <ProfileInfo avatar={image} name={name} username={username} />
            <Box sx={{ pt: 3 }}>
                <Button
                    fullWidth
                    disabled={toggleDisabled}
                    onClick={toggleSubscribe}
                    color={subscribed ? 'secondary' : 'primary'}
                    variant={'contained'}>
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </Button>
            </Box>
        </Box>
    )
}

export default UserInfo
