import React, { useMemo } from 'react'
import { Box } from '@mui/material'
import { Trade } from '@widgets'
import { useParams } from 'react-router'
import { tradeItems } from '@_mock/trade.js'

const TradePage = () => {
    const { id: tradeId } = useParams()
    return (
        <Box sx={{ pt: 3 }}>
            <Trade tradeId={tradeId} />
        </Box>
    )
}

export default TradePage
