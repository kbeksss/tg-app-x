import React, { useMemo, useState } from 'react'
import { Box, Button, Grid2, Typography } from '@mui/material'
import { ProfileImage } from '@widgets'
import { ConfirmSubscribe } from '@features'
import { useTg } from '@shared/hooks/useTg.js'
import { notify } from '@shared/utils/functions/index.js'
import { SuccessDialog } from '@shared/ui/index.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const UserItem = ({
    unfollowUser,
    followUser,
    id,
    username,
    subscribed,
    onClick,
    image,
    buttonDisabled,
}) => {
    const [isConfirmSubscribe, setIsConfirmSubscribe] = useState(false)
    const [successOpen, setSuccessOpen] = useState(false)
    const onUnfollowUser = async () => {
        const { error } = await unfollowUser({ id })
        if (error) {
            notify({ type: 'error', msg: "Couldn't unfollow" })
        }
    }
    const onFollowUser = async () => {
        const { error } = await followUser({ id })
        if (error) {
            notify({ type: 'error', msg: "Couldn't unfollow" })
            return
        }
        setIsConfirmSubscribe(false)
        setSuccessOpen(true)
    }
    const onButtonClick = (e) => {
        e.stopPropagation()
        subscribed ? onUnfollowUser() : setIsConfirmSubscribe(true)
    }
    return (
        <>
            <Box onClick={onClick}>
                <Grid2 spacing={2} container alignItems={'center'}>
                    <Grid2 size={'auto'}>
                        <ProfileImage icon={image} width={50} />
                    </Grid2>
                    <Grid2 size={'grow'}>
                        <Typography color={'text.primary'}>
                            {username}
                        </Typography>
                    </Grid2>
                    <Grid2 size={5} container justifyContent={'end'}>
                        <Button
                            size={'small'}
                            color={subscribed ? 'secondary' : 'primary'}
                            disabled={buttonDisabled}
                            onClick={onButtonClick}
                            variant={'contained'}>
                            {subscribed ? 'Unsubscribe' : 'Subscribe'}
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
            <SuccessDialog
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
                title={'Successfully subscribed'}
                text={`You have successfully subscribed to https://x.com/${username}`}
                actionLabel={'Okay'}
                action={() => setSuccessOpen(false)}
            />
            <ConfirmSubscribe
                username={username}
                onConfirm={onFollowUser}
                open={isConfirmSubscribe}
                onClose={() => setIsConfirmSubscribe(false)}
            />
        </>
    )
}

export default UserItem
