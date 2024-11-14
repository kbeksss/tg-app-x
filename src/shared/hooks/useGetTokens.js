import { useEffect, useMemo, useState } from 'react'
import { floatAmountToNumber, getBalance } from '@shared/utils/functions'

export const useGetTokens = ({ wallets, portfolio, network }) => {
    const [solanaBalances, setSolanaBalances] = useState([])
    const [ethereumBalances, setEthereumBalances] = useState([])
    useEffect(() => {
        if (wallets && portfolio) {
            getBalance(portfolio, wallets).then(
                ({ solanaBalances, ethereumBalances }) => {
                    setSolanaBalances(solanaBalances)
                    setEthereumBalances(ethereumBalances)
                }
            )
        }
    }, [wallets, portfolio])

    const prioritizedNames = ['Ethereum', 'Solana']

    const balances = useMemo(() => {
        let combinedBalances = []
        if (!network) {
            combinedBalances = [...solanaBalances, ...ethereumBalances]
        } else {
            combinedBalances =
                network === 'ETHEREUM' ? ethereumBalances : solanaBalances
        }

        return combinedBalances.sort((a, b) => {
            const aPriority = prioritizedNames.includes(a.name) ? 1 : 0
            const bPriority = prioritizedNames.includes(b.name) ? 1 : 0
            return bPriority - aPriority
        })
    }, [solanaBalances, ethereumBalances, network])
    const networkPortfolios = useMemo(() => {
        return [...solanaBalances, ...ethereumBalances].filter(
            (wallet) => wallet.name === 'Ethereum' || wallet.name === 'Solana'
        )
    }, [solanaBalances, ethereumBalances])

    const totalBalance = useMemo(() => {
        return [...solanaBalances, ...ethereumBalances].reduce(
            (accum, current) => {
                accum = accum + floatAmountToNumber(current.balance)
                return accum
            },
            0
        )
    }, [balances])

    return {
        solanaBalances,
        ethereumBalances,
        balances,
        networkPortfolios,
        totalBalance: floatAmountToNumber(totalBalance),
    }
}
