import React from 'react'
import { Box } from '@mui/material'
import { Receive } from '@widgets'
import { useTg } from '@shared/hooks/useTg.js'

const ReceivePage = () => {
    useTg({ backButtonVisible: true })
    return (
        <Box sx={{ pt: 4, pb: 15 }}>
            <Receive />
        </Box>
    )
}

export default ReceivePage
