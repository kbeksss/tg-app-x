import React, { useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Balance, NetworkSelect, TokenList } from '@widgets'
import Operate from './ui/Operate'
import { tokens } from '@_mock/currency.js'
import { useSelector } from 'react-redux'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'

const Home = () => {
    const { data } = useFetchAccountPortfolioQuery()
    const [network, setNetwork] = useState('')
    const account = useSelector((state) => state.account)
    const { balances, totalBalance } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
        network,
    })
    return (
        <Box sx={{ py: 1.5 }}>
            <Stack alignItems={'center'}>
                <Box sx={{ minWidth: 250 }}>
                    <NetworkSelect network={network} setNetwork={setNetwork} />
                </Box>
                <Balance balance={totalBalance} />
            </Stack>
            <Box sx={{ pt: 4, pb: 2 }}>
                <Operate />
            </Box>
            <Box sx={{ px: 2 }}>
                <TokenList tokens={balances} />
            </Box>
        </Box>
    )
}

export default Home
