import React from 'react'
import { Box } from '@mui/material'

const ItemBox = ({ children }) => {
    return (
        <Box
            sx={{
                borderRadius: '16px',
                p: 2,
                backgroundColor: 'background.grey',
            }}>
            {children}
        </Box>
    )
}

export default ItemBox
