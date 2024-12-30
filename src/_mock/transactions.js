import { nanoid } from 'nanoid'

export const myTransactions = [
    {
        id: nanoid(),
        symbol: 'JPT',
        token: 'Jupiter',
        value: '0.00021299',
        valueInUSD: '500',
        type: 'BUY',
        tokenImg: '/assets/icons/tokens/jupiter.png',
    },
    {
        id: nanoid(),
        symbol: 'JPT',
        token: 'Jupiter',
        value: '0.00021299',
        valueInUSD: '500',
        type: 'SELL',
        tokenImg: '/assets/icons/tokens/jupiter.png',
    },
]
