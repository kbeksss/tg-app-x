import React from 'react'
import { Box, Button, Grid2 } from '@mui/material'
import { ProfileImage } from '@widgets'

const UserItem = ({ username, subscribed, onClick }) => {
    return (
        <Box onClick={onClick}>
            <Grid2 spacing={2} container alignItems={'center'}>
                <Grid2 size={'auto'}>
                    <ProfileImage width={50} />
                </Grid2>
                <Grid2 size={'grow'}>{username}</Grid2>
                <Grid2 size={3} container justifyContent={'end'}>
                    <Button
                        color={subscribed ? 'secondary' : 'primary'}
                        size={'small'}
                        variant={'contained'}>
                        {subscribed ? 'Unsubscribe' : 'Subscribe'}
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default UserItem
