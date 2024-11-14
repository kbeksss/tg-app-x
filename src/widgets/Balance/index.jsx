import React from 'react'
import { Box, Typography } from '@mui/material'

const Balance = ({balance}) => {
    return (
        <>
            <Typography>Balance</Typography>
            <Typography variant={'h1'}>
                <span style={{ color: '#707579' }}>$</span>{balance}
            </Typography>
        </>
    )
}

export default Balance
