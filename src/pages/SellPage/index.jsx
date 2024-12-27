import React from 'react'
import { Box } from '@mui/material'
import { Sell } from '@widgets'
import { useParams } from 'react-router'

const SellPage = () => {
    const { tokenId } = useParams()
    return (
        <Box>
            <Sell tokenId={tokenId} />
        </Box>
    )
}

export default SellPage
