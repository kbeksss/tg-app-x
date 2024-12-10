import React from 'react'
import { Box, Input, TextField, Typography } from '@mui/material'

const SendForm = () => {
    return (
        <Box
            sx={{
                borderRadius: '20px',
                backgroundColor: 'background.grey',
                py: 2,
                px: '6px',
            }}>
            <Typography
                sx={{ px: '6px' }}
                color={'text.secondary'}
                variant={'subtitle2'}>
                Your address
            </Typography>
            <TextField />
        </Box>
    )
}

export default SendForm
