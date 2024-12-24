import React, { useEffect, useState } from 'react'
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
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'
import { UserSubscribe } from '@widgets'

const UsersList = ({ search, myList }) => {
    const { isDarkMode } = useThemeContext()
    const { data, isLoading: listLoading } = useFetchUsersQuery({
        myKol: myList,
        search,
    })
    const [followUser, { isLoading: followLoading }] = useFollowUserMutation()
    const [unfollowUser, { isLoading: unfollowLoading }] =
        useUnfollowUserMutation()
    const navigate = useNavigate()
    const [isSubscribing, setIsSubscribing] = useState(false)
    const [followingUser, setFollowingUser] = useState(null)
    useEffect(() => {
        setIsSubscribing(!!followingUser)
    }, [followingUser])
    return !!data?.kols?.length ? (
        <Stack
            spacing={2}
            divider={
                <Divider
                    variant={'inset'}
                    component={'div'}
                    sx={{
                        borderColor: 'text.primary',
                        opacity: 0.3,
                        width: 'calc(100% - 66px)',
                        ml: 'auto!important',
                    }}
                />
            }>
            {data?.kols.map((user) => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    user={user}
                    followUser={followUser}
                    unfollowUser={unfollowUser}
                    onClick={() => navigate(`${paths.userProfile}/${user.id}`)}
                    subscribed={myList}
                    buttonDisabled={
                        followLoading || unfollowLoading || listLoading
                    }
                    setFollowingUser={setFollowingUser}
                />
            ))}
            <UserSubscribe
                user={followingUser}
                followUser={followUser}
                isSubscribing={isSubscribing}
                setIsSubscribing={setIsSubscribing}
            />
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
                                isDarkMode
                                    ? '/assets/icons/utilities/not-found-green.png'
                                    : '/assets/icons/utilities/not-found.png'
                            }
                            alt=''
                        />
                    </Stack>
                    <Typography
                        color={'text.primary'}
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
                        color={'text.primary'}
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
