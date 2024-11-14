import { ACCESS_TOKEN } from '@shared/config.js'
import { axiosRequest } from '@shared/api/xhr/axios/index.js'
import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '@shared/api/services/authService'

const initialState = {
    accessToken: localStorage.getItem(ACCESS_TOKEN) || null,
}

const saveTokensLocally = ({ accessToken }) => {
    axiosRequest.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    accessToken && localStorage.setItem(ACCESS_TOKEN, accessToken)
}

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
};

export const authModel = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveTokens: (state, { payload }) => {
            const { accessToken } = payload
            saveTokensLocally({ accessToken })
            state.accessToken = accessToken
        },
        logout: (state) => {
            localStorage.removeItem(ACCESS_TOKEN)
            state.accessToken = null
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                const { accessToken } = payload
                saveTokensLocally({ accessToken })
                return { ...state, ...payload }
            }
        )
    },
})

const authActions = authModel.actions
export { authActions }
export default authModel.reducer
