import React from 'react'
import { Box } from '@mui/material'
import { UserProfile } from '@widgets'
import { useTg } from '@shared/hooks/useTg.js'

const UserProfilePage = () => {
    useTg({ backButtonVisible: true })
    return (
        <Box sx={{ pt: 4 }}>
            <UserProfile />
        </Box>
    )
}

export default UserProfilePage
