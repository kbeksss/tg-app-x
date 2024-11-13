import React from 'react'
import { Box } from '@mui/material'
import { Receive } from '@widgets'
import { useNavigate } from 'react-router-dom'
import { useTg } from '@shared/hooks/useTg.js'

const ReceivePage = () => {
    useTg({ backButtonVisible })
    return (
        <Box sx={{ pt: 1, pb: 15 }}>
            <Receive />
        </Box>
    )
}

export default ReceivePage
