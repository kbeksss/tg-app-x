import React, { useMemo, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { networks, NetworkSelect } from '@widgets'
import { QRCode } from '@shared/ui/index.js'
import BottomActions from './ui/BottomActions'

const Receive = () => {
    const [network, setNetwork] = useState(networks[0].value)
    const tokenAddress = useMemo(
        () =>
            network === networks[0].value
                ? 'TCrMFAVNb3XtazY6YGmBrDFCRQB6b4twa'
                : 'TCraaddxxMFAVNb3XtazY6YGmBrDFCRQB6b4twa',
        [network]
    )
    return (
        <Box>
            <Stack alignItems={'center'}>
                <Box sx={{ minWidth: 250 }}>
                    <NetworkSelect
                        network={network}
                        setNetwork={setNetwork}
                        displayEmpty={false}
                    />
                </Box>
            </Stack>
            <Stack sx={{ mt: 2 }} alignItems={'center'}>
                <Box
                    sx={{
                        p: '10px',
                        maxWidth: 220,
                        borderRadius: '16px',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}>
                    <QRCode value={tokenAddress} />
                    <Typography
                        sx={{ wordWrap: 'break-word', mt: 2 }}
                        align={'center'}>
                        {tokenAddress}
                    </Typography>
                </Box>
            </Stack>
            <BottomActions />
        </Box>
    )
}

export default Receive
