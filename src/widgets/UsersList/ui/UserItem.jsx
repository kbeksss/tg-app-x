import React, { useMemo, useState } from 'react'
import { Box, Button, Grid2, Typography } from '@mui/material'
import { ProfileImage } from '@widgets'
import { ConfirmSubscribe } from '@features'
import { useTg } from '@shared/hooks/useTg.js'

const UserItem = ({
    username,
    subscribed,
    onClick,
    image,
    onFollow,
    onUnfollow,
    buttonDisabled,
}) => {
    const { isDark } = useTg()
    const [isConfirmSubscribe, setIsConfirmSubscribe] = useState(false)
    const onButtonClick = (e) => {
        e.stopPropagation()
        subscribed ? onUnfollow() : setIsConfirmSubscribe(true)
    }
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
        <>
            <Box onClick={onClick}>
                <Grid2 spacing={2} container alignItems={'center'}>
                    <Grid2 size={'auto'}>
                        <ProfileImage icon={image} width={50} />
                    </Grid2>
                    <Grid2 size={'grow'}>
                        <Typography color={isDark ? 'white' : 'black'}>
                            {username}
                        </Typography>
                    </Grid2>
                    <Grid2 size={5} container justifyContent={'end'}>
                        <Button
                            sx={subscribeColors}
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
                username={username}
                onConfirm={onFollow}
                open={isConfirmSubscribe}
                onClose={() => setIsConfirmSubscribe(false)}
            />
        </>
    )
}

export default UserItem
