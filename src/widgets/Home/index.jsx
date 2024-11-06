import React, { useMemo, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Balance, NetworkSelect, TokenList } from '@widgets'
import Operate from './ui/Operate'

export const tokens = [
    {
        id: 'kkkaaa',
        currencyCode: 'sol',
        currencyName: 'Solana',
        currencyPrice: '1000',
        amountInWallet: '2',
        icon: '/assets/icons/network/solana.png',
        network: 'solana',
    },
    {
        id: 'kjkjfajfkas',
        currencyCode: 'bonk',
        currencyName: 'Bonk',
        currencyPrice: '500',
        amountInWallet: '3',
        icon: '/assets/icons/tokens/bonk.png',
        network: 'etherium',
    },
    {
        id: 'aadfdafasf',
        currencyCode: 'inj',
        currencyName: 'Injective',
        currencyPrice: '1000',
        amountInWallet: '0',
        icon: '/assets/icons/tokens/inj.png',
        network: 'solana',
    },
    {
        id: 'aadddffccc',
        currencyCode: 'jup',
        currencyName: 'Jupiter',
        currencyPrice: '800',
        amountInWallet: '3',
        icon: '/assets/icons/tokens/jupiter.png',
        network: 'etherium',
    },
    {
        id: 'aabbccdd',
        currencyCode: 'eth',
        currencyName: 'Etherium',
        currencyPrice: '2500',
        amountInWallet: '5',
        icon: '/assets/icons/network/eth-icon.png',
        network: 'solana',
    },
    {
        id: 'abcdefg',
        currencyCode: 'strk',
        currencyName: 'Starknet',
        currencyPrice: '120',
        amountInWallet: '3',
        icon: '/assets/icons/tokens/strk.png',
        network: 'etherium',
    },
]

const Home = () => {
    const [network, setNetwork] = useState('')
    const filteredTokens = useMemo(() => {
        return !!network
            ? tokens.filter((token) => token.network === network)
            : tokens
    }, [network])
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
