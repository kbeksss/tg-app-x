import { meModel } from '@app/entities/me/model/index.js'
import { combineReducers } from '@reduxjs/toolkit'
import {accountApi, authApi, usersApi} from '@shared/api/services'
import { authModel } from '@app/entities/auth/model'
import { accountModel } from '@app/entities/account/model'

export const rootReducer = combineReducers({
    auth: authModel.reducer,
    account: accountModel.reducer,
    me: meModel.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
})
