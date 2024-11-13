import React from 'react'
import { Box } from '@mui/material'
import { Exchange } from '@widgets'
import { useTg } from '@shared/hooks/useTg.js'

const ExchangePage = () => {
    useTg({ backButtonVisible: true })
    return (
        <Box sx={{ pt: 4 }}>
            <Exchange />
        </Box>
    )
}

export default ExchangePage
