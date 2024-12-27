import React from 'react'
import { Box } from '@mui/material'
import { TokenInfo } from '@features'
import MyTransactions from './ui/MyTransactions.jsx'

const Sell = ({ tokenId }) => {
    return (
        <Box>
            <TokenInfo coinId={tokenId} />
            <MyTransactions />
        </Box>
    )
}

export default Sell
