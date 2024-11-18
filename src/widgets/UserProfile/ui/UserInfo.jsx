import React from 'react'
import { Avatar, Box, Button, Grid2, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const UserInfo = ({ subscribed, toggleSubscribe, name, username, image, toggleDisabled }) => {
    return (
        <Box sx={{ px: 2 }}>
            <Grid2 container spacing={2} alignItems={'center'}>
                <Grid2 size={'auto'}>
                    <Avatar
                        sx={{
                            width: 60,
                            height: 60,
                            border: '2px solid #F4F4F6',
                        }}
                        src={image}></Avatar>
                </Grid2>
                <Grid2 size={'grow'}>
                    <Typography variant={'h6'}>{name}</Typography>
                    <Typography color={'text.secondary'}>{username}</Typography>
                </Grid2>
                <Grid2 size={1}>
                    <Iconify icon={'tabler:dots'} />
                </Grid2>
            </Grid2>
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
