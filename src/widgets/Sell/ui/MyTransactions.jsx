import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const MyTransactions = () => {
    return (
        <Box sx={{ py: 3, px: 2 }}>
            <Stack justifyContent={'space-between'}>
                <Typography>My transactions</Typography>
            </Stack>
        </Box>
    )
}

export default MyTransactions
