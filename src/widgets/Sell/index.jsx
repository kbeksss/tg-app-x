import React from 'react'
import { Box } from '@mui/material'
import { TokenInfo } from '@features'
import MyTransactions from './ui/MyTransactions.jsx'
import PurchaseRecommendation from './ui/PurchaseRecommendation.jsx'
import BottomAction from './ui/BottomAction'

const Sell = ({ tokenId }) => {
    return (
        <Box>
            <TokenInfo coinId={tokenId} />
            <MyTransactions />
            <PurchaseRecommendation />
            <BottomAction />
        </Box>
    )
}

export default Sell
