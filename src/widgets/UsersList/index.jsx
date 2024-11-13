import React, { useEffect, useState } from 'react'
import { Box, Divider, Stack } from '@mui/material'
import UserItem from './ui/UserItem'
import { myUsers, users } from '@_mock/users.js'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'

const UsersList = ({ myList = true }) => {
    const navigate = useNavigate()
    const [userList, setUsersList] = useState(myUsers)
    useEffect(() => {
        setUsersList(myList ? myUsers : users)
    }, [myList])
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
            {userList.map((user) => (
                <UserItem
                    key={user.id}
                    onClick={() => navigate(`${paths.userProfile}/${user.id}`)}
                    subscribed={myList}
                    username={user.username}
                />
            ))}
        </Stack>
    )
}

export default UsersList
