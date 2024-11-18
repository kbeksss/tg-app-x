import { Mutex } from 'async-mutex'
import { axiosRequest, axiosScraperRequest } from '../axios'
import { BASE_URL } from '@shared/config'
import { authActions } from '@app/entities/auth/model'
import { createApi } from '@reduxjs/toolkit/query/react'

const mutex = new Mutex()

const axiosBaseQuery = async ({ url, method, data, params }) => {
    try {
        const result = await axiosRequest({ url, method, data, params })
        return result
    } catch (axiosError) {
        return {
            error: axiosError.response,
        }
    }
}

const scraperAxiosBaseQuery = async ({ url, method, data, params }) => {
    try {
        const result = await axiosScraperRequest({ url, method, data, params })
        return result
    } catch (axiosError) {
        return {
            error: axiosError.response,
        }
    }
}

const savingTokens = async ({ api, currentArgs, resultData }) => {
    if (resultData) {
        api.dispatch(authActions.saveTokens(resultData))
        return await axiosBaseQuery(currentArgs)
    } else {
        api.dispatch(authActions.logout())
        return null
    }
}

const authFunc = async ({ tg }) => {
    const params = { initData: tg.initData }
    if (tg?.initDataUnsafe?.start_param) {
        params.referralCode = tg?.initDataUnsafe?.start_param
    }
    return await axiosRequest.post(`${BASE_URL}/api/v1/auth`, params)
}

export const baseQueryWithReAuth = async (args, api) => {
    await mutex.waitForUnlock()
    const currentArgs = { ...args, data: args.body }
    let result = await axiosBaseQuery(currentArgs)
    const tg = window.Telegram.WebApp
    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                let authResult = await authFunc({ tg })
                result = await savingTokens({
                    api,
                    currentArgs,
                    resultData: authResult?.data,
                })
            } catch (e) {
                api.dispatch(authActions.logout())
                let authResult = await authFunc({ tg })
                result = await savingTokens({
                    api,
                    currentArgs,
                    resultData: authResult?.data,
                })
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
            result = await axiosBaseQuery(currentArgs)
        }
    }
    return result
}

export const baseQuery = baseQueryWithReAuth
export const baseApi = createApi({
    baseQuery,
    endpoints: () => ({}),
})

export const scraperApi = createApi({
    reducerPath: 'scraper',
    baseQuery: scraperAxiosBaseQuery,
    endpoints: () => ({}),
})
