import { baseApi } from '../xhr/rtk'
import {
    ACCOUNT_ETHEREUM_CONFIG,
    ACCOUNT_ETHEREUM_TRADE_TOGGLE,
    ACCOUNT_PORTFOLIO_URL,
    ACCOUNT_SOLANA_CONFIG,
    ACCOUNT_SOLANA_TRADE_TOGGLE,
    ACCOUNT_URL,
} from './constants'

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
            query: (body) => ({
                url: ACCOUNT_ETHEREUM_CONFIG,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
        }),
        postSolanaConfig: build.mutation({
            query: (body) => ({
                url: ACCOUNT_SOLANA_CONFIG,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Account' }],
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
} = accountApi
