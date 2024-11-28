import React from 'react'
import { Box } from '@mui/material'
import { Trade } from '@widgets'
import { useTg } from '@shared/hooks/useTg.js'

const TradePage = () => {
    useTg({ backButtonVisible: true })
    return (
        <Box sx={{ pt: 3 }}>
            <Trade />}
        </Box>
    )
}

export default TradePage
