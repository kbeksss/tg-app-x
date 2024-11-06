import React, { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Balance, NetworkSelect } from '@widgets'
import Operate from './ui/Operate'

const Home = () => {
    const [network, setNetwork] = useState('')
    return (
        <Box sx={{ py: 1.5 }}>
            <Stack alignItems={'center'}>
                <Box sx={{ minWidth: 250 }}>
                    <NetworkSelect network={network} setNetwork={setNetwork} />
                </Box>
                <Balance />
            </Stack>
            <Box sx={{ pt: 4, pb: 2 }}>
                <Operate />
            </Box>
        </Box>
    )
}

export default Home
