import React from 'react'
import { Box } from '@mui/material'

const Tag = ({ children }) => {
    return (
        <Box
            sx={{
                p: 1,
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.10)',
            }}>
            {children}
        </Box>
    )
}

export default Tag
