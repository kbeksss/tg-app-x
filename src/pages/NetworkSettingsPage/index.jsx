import React, { useMemo } from 'react'
import { Box } from '@mui/material'
import { NetworkSettings } from '@widgets'
import { useParams } from 'react-router'
import { networks } from '@_mock/networks.js'
import { useTg } from '@shared/hooks/useTg.js'

const NetworkSettingsPage = () => {
    useTg({ backButtonVisible: true })
    const { network: networkSymbol } = useParams()
    const network = useMemo(
        () => networks.find((item) => item.symbol === networkSymbol),
        [networkSymbol]
    )
    return (
        <Box sx={{ pt: 4 }}>
            <NetworkSettings network={network} />
        </Box>
    )
}

export default NetworkSettingsPage
