import React from 'react'
import { Box, Divider, Stack } from '@mui/material'
import UserItem from './ui/UserItem'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'
import {
    useFetchUsersQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} from '@shared/api/services/index.js'

const UsersList = ({ myList = true }) => {
    const { data } = useFetchUsersQuery({ myKol: myList })
    const [followUser] = useFollowUserMutation()
    const [unfollowUser] = useUnfollowUserMutation()
    const subscribeToggle = async (id) => {
        let res
        if (myList) {
            res = await unfollowUser({ id })
        } else {
            res = await followUser({ id })
        }
        console.log('res', res)
    }
    const navigate = useNavigate()
    return (
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
                    username={user.username}
                    onSubscribeToggle={() => subscribeToggle(user.id)}
                />
            ))}
        </Stack>
    )
}

export default UsersList
