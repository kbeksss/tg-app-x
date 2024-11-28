import { useEffect, useMemo, useState } from 'react'
import { floatAmountToNumber, getBalance } from '@shared/utils/functions'

export const useGetTokens = ({
    wallets,
    portfolio,
    network,
    networkSymbol,
    tokenSymbol,
}) => {
    const [solanaBalances, setSolanaBalances] = useState([])
    const [ethereumBalances, setEthereumBalances] = useState([])
    const [token, setToken] = useState(null)
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
    useEffect(() => {
        if (!tokenSymbol) {
            return
        }
        const token = [...solanaBalances, ...ethereumBalances].find(
            (token) => token.symbol === tokenSymbol
        )
        setToken(token || null)
    }, [tokenSymbol, solanaBalances, ethereumBalances])
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
    const networkPortfolio = useMemo(() => {
        if (!networkSymbol) {
            return
        }
        return [...solanaBalances, ...ethereumBalances].find(
            (wallet) => wallet.symbol === networkSymbol
        )
    }, [solanaBalances, ethereumBalances, networkSymbol])

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
        networkPortfolio,
        totalBalance: floatAmountToNumber(totalBalance),
        token,
    }
}
