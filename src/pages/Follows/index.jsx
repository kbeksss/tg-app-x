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
    useTg({ backButtonVisible: true })
    return (
        <Stack sx={{ pt: 2, px: 2, height: 'calc(100vh - 80px)' }}>
            <Box sx={{ pb: 2 }}>
                <Search value={searchQuery} setValue={setSearchQuery} />
            </Box>
            <Box sx={{ pt: 2, flexGrow: 1, overflow: 'auto' }}>
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
