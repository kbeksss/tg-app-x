import { nanoid } from 'nanoid'

export const tradeItems = [
    {
        id: nanoid(),
        currencyCode: 'bonk',
        date: '23.10.24',
        direction: 'negative',
        amount: '1000',
        tokenIcon: '/assets/icons/tokens/bonk.png',
        networkIcon: '/assets/icons/network/eth-icon.png',
    },
    {
        id: nanoid(),
        currencyCode: 'inj',
        date: '23.10.24',
        direction: 'positive',
        amount: '800',
        tokenIcon: '/assets/icons/tokens/inj.png',
        networkIcon: '/assets/icons/network/solana.png',
    },
    {
        id: nanoid(),
        currencyCode: 'jup',
        date: '23.10.24',
        direction: 'positive',
        amount: '700',
        tokenIcon: '/assets/icons/tokens/jupiter.png',
        networkIcon: '/assets/icons/network/eth-icon.png',
    },
    {
        id: nanoid(),
        currencyCode: 'strk',
        date: '23.10.24',
        tokenIcon: '/assets/icons/tokens/strk.png',
        direction: 'negative',
        amount: '800',
        networkIcon: '/assets/icons/network/solana.png',
    },
]
