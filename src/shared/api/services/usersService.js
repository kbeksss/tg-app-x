import { baseApi } from '../xhr/rtk'
import { USER_FOLLOW_URL, USERS_URL } from './constants'

export const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchUsers: build.query({
            query: (params) => ({
                url: USERS_URL,
                method: 'GET',
                params,
            }),
        }),
    }),
})

export const {} = usersApi
