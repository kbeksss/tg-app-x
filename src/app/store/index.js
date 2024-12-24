import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers'
import { baseApi } from '@shared/api/xhr'

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(baseApi.middleware),
})
