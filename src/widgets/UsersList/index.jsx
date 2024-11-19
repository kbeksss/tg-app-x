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

const UsersList = ({ search, myList = true }) => {
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
                    sx={{ width: 'calc(100% - 66px)', ml: 'auto!important' }}
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
            <Typography variant={'h5'}>No Subscriptions Yet!</Typography>
            <Typography color={'text.secondary'}>
                Click the 'Subcribe' button to add a favorite.
            </Typography>
        </Stack>
    )
}

export default UsersList
