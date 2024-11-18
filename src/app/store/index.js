import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers'
import { accountApi, authApi, usersApi } from '@shared/api/services'
import { tweetsApi } from '@shared/api/services/tweetsService.js'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            authApi.middleware,
            accountApi.middleware,
            usersApi.middleware,
            tweetsApi.middleware
        ),
})
