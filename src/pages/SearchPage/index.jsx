import React, { useState } from 'react'
import { Box } from '@mui/material'
import { BottomButton, Search } from '@shared/ui'
import { UsersList } from '@widgets'

const SearchPage = () => {
    const [isMyList, setIsMyList] = useState(true)
    return (
        <Box sx={{ pt: 2, px: 2 }}>
            <Search />
            <Box sx={{ pt: 2 }}>
                <UsersList myList={isMyList} />
            </Box>
            {isMyList && (
                <BottomButton
                    onClick={() => setIsMyList(false)}
                    label={'Subscribe to a new account'}
                    withToolbar
                />
            )}
        </Box>
    )
}

export default SearchPage
