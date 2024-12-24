import React from 'react'
import { Box, Button, Grid2, Typography } from '@mui/material'
import { ProfileImage } from '@widgets'
import { notify } from '@shared/utils/functions/index.js'

const UserItem = ({
    unfollowUser,
    setFollowingUser,
    user,
    id,
    subscribed,
    onClick,
    buttonDisabled,
}) => {
    const onUnfollowUser = async () => {
        const { error } = await unfollowUser({ id })
        if (error) {
            notify({ type: 'error', msg: "Couldn't unfollow" })
        }
    }
    const onButtonClick = (e) => {
        e.stopPropagation()
        subscribed ? onUnfollowUser() : setFollowingUser(user)
    }
    return (
        <>
            <Box onClick={onClick}>
                <Grid2 spacing={2} container alignItems={'center'}>
                    <Grid2 size={'auto'}>
                        <ProfileImage icon={user.image} width={50} />
                    </Grid2>
                    <Grid2 size={'grow'}>
                        <Typography color={'text.primary'}>
                            {user.username}
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
        </>
    )
}

export default UserItem
