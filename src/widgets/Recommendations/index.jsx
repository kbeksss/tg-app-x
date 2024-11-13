import React from 'react'
import { Box, Stack } from '@mui/material'
import RecItem from './ui/RecItem.jsx'

const Recommendations = () => {
    return (
        <Stack spacing={2}>
            <RecItem />
            <RecItem />
            <RecItem />
        </Stack>
    )
}

export default Recommendations
