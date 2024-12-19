import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTg } from '@shared/hooks/useTg.js'
import { BottomButton, Search } from '@shared/ui/index.js'
import { UsersList } from '@widgets'
import { paths } from '@pages/paths.js'

const Follows = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const { tg } = useTg({ backButtonVisible: true })
    console.log('safeAreaInset', tg.safeAreaInset)
    console.log('contentSafeAreaInset', tg.contentSafeAreaInset)
    console.log('isActive', tg.isActive)
    console.log('isFullscreen', tg.isFullscreen)
    return (
        <Stack sx={{ pt: 2, height: '100vh' }}>
            <Box sx={{ pb: 2, px: 2 }}>
                <Search value={searchQuery} setValue={setSearchQuery} />
            </Box>
            <Box sx={{ pt: 2, flexGrow: 1, overflow: 'auto', px: 2 }}>
                <UsersList search={searchQuery} myList />
            </Box>
            <BottomButton
                onClick={() => navigate(paths.newUsers)}
                label={'Subscribe to a new account'}
                withToolbar
            />
        </Stack>
    )
}

export default Follows
