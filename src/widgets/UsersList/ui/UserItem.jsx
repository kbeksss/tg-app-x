import React, { useState } from 'react'
import { Box, Button, Grid2 } from '@mui/material'
import { ProfileImage } from '@widgets'
import { ConfirmSubscribe } from '@features'

const UserItem = ({
    username,
    subscribed,
    onClick,
    image,
    onFollow,
    onUnfollow,
    buttonDisabled,
}) => {
    const [isConfirmSubscribe, setIsConfirmSubscribe] = useState(false)
    const onButtonClick = (e) => {
        e.stopPropagation()
        subscribed ? onUnfollow() : setIsConfirmSubscribe(true)
    }
    return (
        <>
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
                            disabled={buttonDisabled}
                            onClick={onButtonClick}
                            variant={'contained'}>
                            {subscribed ? 'Unsubscribe' : 'Subscribe'}
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
            <ConfirmSubscribe
                onConfirm={onFollow}
                open={isConfirmSubscribe}
                onClose={() => setIsConfirmSubscribe(false)}
            />
        </>
    )
}

export default UserItem
