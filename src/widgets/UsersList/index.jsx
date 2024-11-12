import React, { useEffect, useState } from 'react'
import { Box, Divider, Stack } from '@mui/material'
import UserItem from './ui/UserItem'
import { myUsers, users } from '@_mock/users.js'

const UsersList = ({ myList = true }) => {
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
                <UserItem subscribed={myList} username={user.username} />
            ))}
        </Stack>
    )
}

export default UsersList
