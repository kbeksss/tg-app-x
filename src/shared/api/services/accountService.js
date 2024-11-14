import { baseApi } from '../xhr/rtk'
import { ACCOUNT_PORTFOLIO_URL, ACCOUNT_URL } from './constants'

export const accountApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAccount: build.query({
            query: (body) => ({
                url: ACCOUNT_URL,
                method: 'GET',
                body,
            }),
        }),
        fetchAccountPortfolio: build.query({
            query: (body) => ({
                url: ACCOUNT_PORTFOLIO_URL,
                method: 'GET',
                body,
            }),
        }),
    }),
})

export const { useFetchAccountQuery, useFetchAccountPortfolioQuery } = accountApi
