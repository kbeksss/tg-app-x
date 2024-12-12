import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import UserItem from './ui/UserItem'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'
import {
    useFetchUsersQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} from '@shared/api/services/index.js'
import { notify } from '@shared/utils/functions'
import { useTg } from '@shared/hooks/useTg.js'

const UsersList = ({ search, myList }) => {
    const { isDark } = useTg()
    const { data, isLoading: listLoading } = useFetchUsersQuery({
        myKol: myList,
        search,
    })
    const [followUser, { isLoading: followLoading }] = useFollowUserMutation()
    const [unfollowUser, { isLoading: unfollowLoading }] =
        useUnfollowUserMutation()
    const onUnfollowUser = async (id) => {
        const { error } = await unfollowUser({ id })
        if (error) {
            notify({ type: 'error', msg: "Couldn't unfollow" })
        }
    }
    const onFollowUser = async (id) => {
        const { error } = await followUser({ id })
        if (error) {
            notify({ type: 'error', msg: "Couldn't unfollow" })
        }
    }
    const navigate = useNavigate()
    return !!data?.kols?.length ? (
        <Stack
            spacing={2}
            divider={
                <Divider
                    variant={'inset'}
                    component={'div'}
                    sx={{
                        borderColor: isDark
                            ? 'rgba(255,255,255,0.3)'
                            : 'rgba(0,0,0,0.3)',
                        width: 'calc(100% - 66px)',
                        ml: 'auto!important',
                    }}
                />
            }>
            {data?.kols.map((user) => (
                <UserItem
                    key={user.id}
                    image={user.image}
                    onClick={() => navigate(`${paths.userProfile}/${user.id}`)}
                    subscribed={myList}
                    buttonDisabled={
                        followLoading || unfollowLoading || listLoading
                    }
                    username={user.username}
                    onUnfollow={() => onUnfollowUser(user.id)}
                    onFollow={() => onFollowUser(user.id)}
                />
            ))}
        </Stack>
    ) : (
        <Stack
            sx={{ height: '100%' }}
            justifyContent={'center'}
            alignItems={'center'}>
            {search ? (
                <Box sx={{ px: 5 }}>
                    <Stack direction={'row'} justifyContent={'center'}>
                        <img
                            src={
                                isDark
                                    ? '/assets/icons/utilities/not-found-green.png'
                                    : '/assets/icons/utilities/not-found.png'
                            }
                            alt=''
                        />
                    </Stack>
                    <Typography
                        color={isDark ? 'white' : 'black'}
                        sx={{ mb: 1 }}
                        align={'center'}
                        variant={'h5'}>
                        Nothing was found :(
                    </Typography>
                    <Typography align={'center'} color={'text.secondary'}>
                        Check the spelling and try to write again
                    </Typography>
                </Box>
            ) : (
                <Box sx={{ px: 5 }}>
                    <Typography
                        color={isDark ? 'white' : 'black'}
                        sx={{ mb: 1 }}
                        align={'center'}
                        variant={'h5'}>
                        No Subscriptions Yet!
                    </Typography>
                    <Typography align={'center'} color={'text.secondary'}>
                        Click the 'Subcribe' button to add a favorite.
                    </Typography>
                </Box>
            )}
        </Stack>
    )
}

export default UsersList
