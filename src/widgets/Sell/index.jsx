import React from 'react'
import { Box } from '@mui/material'
import { TokenInfo } from '@features'

const Sell = ({ tokenId }) => {
    return (
        <Box>
            <TokenInfo coinId={tokenId} />
        </Box>
    )
}

export default Sell
