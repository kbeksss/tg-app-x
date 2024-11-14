import { baseApi } from '../xhr/rtk'
import { ACCOUNT_URL } from './constants'

export const accountApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAccount: build.query({
            query: (body) => ({
                url: ACCOUNT_URL,
                method: 'GET',
                body,
            }),
        }),
    }),
})

export const { useFetchAccountQuery } = accountApi
