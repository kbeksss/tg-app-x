import React from 'react'
import { Box } from '@mui/material'
import { Sell } from '@widgets'
import { useParams } from 'react-router'
import { useTg } from '@shared/hooks/useTg.js'

const SellPage = () => {
    const { tokenId } = useParams()
    useTg({ backButtonVisible: true })
    return (
        <Box sx={{ pb: '150px' }}>
            <Sell tokenId={tokenId} />
        </Box>
    )
}

export default SellPage
