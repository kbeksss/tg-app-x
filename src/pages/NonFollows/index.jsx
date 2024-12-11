import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'
import { Search } from '@shared/ui/index.js'
import { UsersList } from '@widgets'

const NonFollows = () => {
    const [searchQuery, setSearchQuery] = useState('')
    useTg({ backButtonVisible: true })
    return (
        <Stack sx={{ pt: 2, px: 2, pb: 2, height: '100vh' }}>
            <Box sx={{ pb: 2 }}>
                <Search value={searchQuery} setValue={setSearchQuery} />
            </Box>
            <Box sx={{ pt: 2, flexGrow: 1, overflow: 'auto' }}>
                <UsersList search={searchQuery} />
            </Box>
        </Stack>
    )
}

export default NonFollows