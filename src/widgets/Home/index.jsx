import React, { useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Balance, NetworkSelect, SellTokens, TokenList } from '@widgets'
import Operate from './ui/Operate'
import { tokens } from '@_mock/currency.js'
import { useSelector } from 'react-redux'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import SendConfirm from './ui/SendConfirm.jsx'

const Home = () => {
    const [sellingToken, setSellingToken] = useState(null)
    const [sendingToken, setSendingToken] = useState(null)
    const { data } = useFetchAccountPortfolioQuery()
    const [network, setNetwork] = useState('')
    const account = useSelector((state) => state.account)
    const { balances, totalBalance } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
        network,
    })
    const openDialog = (token) => {
        if (token.symbol === 'ETH' || token.symbol === 'SOL') {
            setSendingToken(token)
        } else {
            setSellingToken(token)
        }
    }
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
                <TokenList openDialog={openDialog} tokens={balances} />
            </Box>
            <SellTokens
                sellingToken={sellingToken}
                open={!!sellingToken}
                onClose={() => setSellingToken(null)}
            />
            <SendConfirm
                sendingToken={sendingToken}
                open={!!sendingToken}
                onClose={() => setSendingToken(null)}
            />
        </Box>
    )
}

export default Home
