import { baseApi } from '../xhr/rtk'
import {
    ACCOUNT_ETHEREUM_CONFIG,
    ACCOUNT_ETHEREUM_TRADE_TOGGLE,
    ACCOUNT_PORTFOLIO_URL,
    ACCOUNT_SELL_ETHEREUM,
    ACCOUNT_SELL_SOLANA,
    ACCOUNT_SEND_ETHEREUM,
    ACCOUNT_SEND_SOLANA,
    ACCOUNT_SOLANA_CONFIG,
    ACCOUNT_SOLANA_TRADE_TOGGLE,
    ACCOUNT_TRANSACTION_URL,
    ACCOUNT_TRANSACTIONS_URL,
    ACCOUNT_URL,
} from './constants'
import { convertToSmallestUnit } from '@shared/utils/functions/index.js'

export const accountApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAccount: build.query({
            query: (params) => ({
                url: ACCOUNT_URL,
                method: 'GET',
                params,
            }),
            providesTags: [{ type: 'Account' }],
        }),
        fetchAccountPortfolio: build.query({
            query: (params) => ({
                url: ACCOUNT_PORTFOLIO_URL,
                method: 'GET',
                params,
            }),
        }),
        toggleEthereumTrade: build.mutation({
            query: (body) => ({
                url: ACCOUNT_ETHEREUM_TRADE_TOGGLE,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        toggleSolanaTrade: build.mutation({
            query: (body) => ({
                url: ACCOUNT_SOLANA_TRADE_TOGGLE,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        postEthereumConfig: build.mutation({
            query: ({ value }) => {
                const transformedValue = convertToSmallestUnit(value, 'ETH')
                return {
                    url: ACCOUNT_ETHEREUM_CONFIG,
                    method: 'POST',
                    body: { value: transformedValue },
                }
            },
            invalidatesTags: [{ type: 'Account' }],
        }),
        postSolanaConfig: build.mutation({
            query: ({ value }) => {
                const transformedValue = convertToSmallestUnit(value, 'SOL')
                return {
                    url: ACCOUNT_SOLANA_CONFIG,
                    method: 'POST',
                    body: { value: transformedValue },
                }
            },
            invalidatesTags: [{ type: 'Account' }],
        }),
        sendEthereum: build.mutation({
            query: (body) => ({
                url: ACCOUNT_SEND_ETHEREUM,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        sendSolana: build.mutation({
            query: (body) => ({
                url: ACCOUNT_SEND_SOLANA,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        sellEthereum: build.mutation({
            query: (body) => ({
                url: ACCOUNT_SELL_ETHEREUM,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        sellSolana: build.mutation({
            query: (body) => ({
                url: ACCOUNT_SELL_SOLANA,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        fetchTransactions: build.query({
            query: (params) => ({
                url: ACCOUNT_TRANSACTIONS_URL,
                method: 'GET',
                params,
            }),
        }),
        fetchTransaction: build.query({
            query: (params) => ({
                url: ACCOUNT_TRANSACTION_URL,
                method: 'GET',
                params,
            }),
        }),
    }),
})

export const {
    useFetchAccountQuery,
    useFetchAccountPortfolioQuery,
    useToggleEthereumTradeMutation,
    useToggleSolanaTradeMutation,
    usePostEthereumConfigMutation,
    usePostSolanaConfigMutation,
    useSendEthereumMutation,
    useSendSolanaMutation,
    useSellEthereumMutation,
    useSellSolanaMutation,
    useFetchTransactionsQuery,
    useLazyFetchTransactionsQuery,
    useFetchTransactionQuery,
} = accountApi
