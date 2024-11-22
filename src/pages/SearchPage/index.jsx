import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { BottomButton, Search } from '@shared/ui'
import { UsersList } from '@widgets'
import { useTg } from '@shared/hooks/useTg.js'
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [isMyList, setIsMyList] = useState(true)
    useTg({
        backButtonVisible: true,
        onBack: () => {
            if (!isMyList) {
                setIsMyList(true)
                console.log('is not mine')
            } else {
                console.log('mine')
                navigate(-1)
            }
        },
    })
    return (
        <Stack sx={{ pt: 2, px: 2, height: 'calc(100vh - 120px)' }}>
            <Search value={searchQuery} setValue={setSearchQuery} />
            <Box sx={{ pt: 2, flexGrow: 1, overflow: 'auto' }}>
                <UsersList search={searchQuery} myList={isMyList} />
            </Box>
            {isMyList && (
                <BottomButton
                    onClick={() => setIsMyList(false)}
                    label={'Subscribe to a new account'}
                    withToolbar
                />
            )}
        </Stack>
    )
}

export default SearchPage
