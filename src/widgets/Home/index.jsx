import React, { useEffect, useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Balance, NetworkSelect, TokenList } from '@widgets'
import Operate from './ui/Operate'
import { useNavigate } from 'react-router'
import { paths } from '@pages/paths.js'
import { tokens } from '@_mock/currency.js'

window.tempCheck = false //todo: remove later

const Home = () => {
    const navigate = useNavigate()
    const [network, setNetwork] = useState('')
    const filteredTokens = useMemo(() => {
        return !!network
            ? tokens.filter((token) => token.network === network)
            : tokens
    }, [network])
    useEffect(() => {
        if (!window.tempCheck) {
            navigate(paths.seedphrase)
        }
    }, [])
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
            <Box sx={{ px: 2 }}>
                <TokenList tokens={filteredTokens} />
            </Box>
        </Box>
    )
}

export default Home
