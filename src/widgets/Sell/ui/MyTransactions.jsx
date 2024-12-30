import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { myTransactions } from '@_mock/transactions.js'
import TransactionItem from './TransactionItem.jsx'

const MyTransactions = () => {
    return (
        <Box sx={{ py: 3, px: 2 }}>
            <Box sx={{ pb: 1.5 }}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Typography>My transactions</Typography>
                    <Button>Sell all</Button>
                </Stack>
            </Box>
            <Stack spacing={1}>
                {myTransactions.map((transaction) => (
                    <TransactionItem {...transaction} />
                ))}
            </Stack>
        </Box>
    )
}

export default MyTransactions
