import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'
import { Search } from '@shared/ui/index.js'
import { UsersList } from '@widgets'

const NonFollows = () => {
    const [searchQuery, setSearchQuery] = useState('')
    useTg({ backButtonVisible: true })
    return (
        <Stack sx={{ pt: 2, px: 2, height: 'calc(100vh - 120px)' }}>
            <Search value={searchQuery} setValue={setSearchQuery} />
            <Box sx={{ pt: 2, flexGrow: 1, overflow: 'auto' }}>
                <UsersList search={searchQuery} />
            </Box>
        </Stack>
    )
}

export default NonFollows
