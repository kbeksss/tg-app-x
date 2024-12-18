import React from 'react'
import { Box, Button } from '@mui/material'
import { ProfileInfo } from '@shared/ui'

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
                    color={subscribed ? 'secondary' : 'primary'}
                    disabled={toggleDisabled}
                    onClick={toggleSubscribe}
                    variant={'contained'}>
                    {subscribed ? 'Unsubscribe' : 'Subscribe'}
                </Button>
            </Box>
        </Box>
    )
}

export default UserInfo
