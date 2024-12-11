import React, { useCallback, useMemo } from 'react'
import { Box } from '@mui/material'
import { NetworkSettings } from '@widgets'
import { useParams } from 'react-router'
import { useTg } from '@shared/hooks/useTg.js'
import { useSelector } from 'react-redux'
import {
    useFetchAccountPortfolioQuery,
    usePostEthereumConfigMutation,
    usePostSolanaConfigMutation,
    useToggleEthereumTradeMutation,
    useToggleSolanaTradeMutation,
} from '@shared/api/services'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { convertToLargestUnit } from '@shared/utils/functions/index.js'

const NetworkSettingsPage = () => {
    const { network: networkSymbol } = useParams()
    const [toggleEthereumTrade] = useToggleEthereumTradeMutation()
    const [toggleSolanaTrade] = useToggleSolanaTradeMutation()
    const [postEthereumConfig] = usePostEthereumConfigMutation()
    const [postSolanaConfig] = usePostSolanaConfigMutation()
    const account = useSelector((state) => state.account)
    const { data } = useFetchAccountPortfolioQuery()
    const { networkPortfolios } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
    })
    useTg({ backButtonVisible: true })
    const network = useMemo(
        () => networkPortfolios.find((item) => item.symbol === networkSymbol),
        [networkSymbol, networkPortfolios]
    )
    const tradingChecked = useMemo(() => {
        if (!account) {
            return false
        }
        return account[`${networkSymbol.toLowerCase()}Trading`]
    }, [account, networkSymbol])
    const tradingConfigValue = useMemo(() => {
        if (!account) {
            return ''
        }
        return convertToLargestUnit(
            account[`${networkSymbol.toLowerCase()}Config`],
            networkSymbol
        )
    }, [account, networkSymbol])
    const toggleSumbit = useCallback(async () => {
        return networkSymbol === 'ETH'
            ? await toggleEthereumTrade()
            : await toggleSolanaTrade()
    }, [networkSymbol])
    const configUpdateSubmit = useCallback(
        async (value) => {
            return networkSymbol === 'ETH'
                ? await postEthereumConfig({ value })
                : await postSolanaConfig({ value })
        },
        [networkSymbol]
    )
    return (
        <Box sx={{ pt: 4 }}>
            {network && (
                <NetworkSettings
                    network={network}
                    networkCheckedInitial={tradingChecked}
                    configValueInitial={tradingConfigValue}
                    toggleSumbit={toggleSumbit}
                    configUpdateSubmit={configUpdateSubmit}
                />
            )}
        </Box>
    )
}

export default NetworkSettingsPage
