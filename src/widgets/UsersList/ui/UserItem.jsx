import React from 'react'
import { Box, Button, Grid2 } from '@mui/material'
import { ProfileImage } from '@widgets'

const UserItem = ({
    username,
    subscribed,
    onClick,
    image,
    onSubscribeToggle,
}) => {
    const onButtonClick = (e) => {
        e.stopPropagation();
        onSubscribeToggle();
    }
    return (

        <Box onClick={onClick}>
            <Grid2 spacing={2} container alignItems={'center'}>
                <Grid2 size={'auto'}>
                    <ProfileImage icon={image} width={50} />
                </Grid2>
                <Grid2 size={'grow'}>{username}</Grid2>
                <Grid2 size={5} container justifyContent={'end'}>
                    <Button
                        color={subscribed ? 'secondary' : 'primary'}
                        size={'small'}
                        onClick={onButtonClick}
                        variant={'contained'}>
                        {subscribed ? 'Unsubscribe' : 'Subscribe'}
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default UserItem
