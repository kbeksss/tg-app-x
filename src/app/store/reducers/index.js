import { meModel } from '@app/entities/me/model/index.js'
import { combineReducers } from '@reduxjs/toolkit'
import { authApi } from '@shared/api/services'
import { authModel } from '@app/entities/auth/model'

export const rootReducer = combineReducers({
    auth: authModel.reducer,
    me: meModel.reducer,
    [authApi.reducerPath]: authApi.reducer,
})
