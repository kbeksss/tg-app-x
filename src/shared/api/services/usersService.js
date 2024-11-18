import { baseApi } from '../xhr/rtk'
import {
    USER_FOLLOW_URL,
    USER_UNFOLLOW_URL,
    USER_URL,
    USERS_URL,
} from './constants'

export const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchUsers: build.query({
            query: (params) => ({
                url: USERS_URL,
                method: 'GET',
                params,
            }),
            providesTags: [{ type: 'Users' }],
        }),
        fetchUser: build.query({
            query: (params) => ({
                url: USER_URL,
                method: 'GET',
                params,
            }),
            providesTags: [{ type: 'User' }],
        }),
        followUser: build.mutation({
            query: (body) => ({
                url: USER_FOLLOW_URL,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users' }, { type: 'User' }],
        }),
        unfollowUser: build.mutation({
            query: (body) => ({
                url: USER_UNFOLLOW_URL,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users' }, { type: 'User' }],
        }),
    }),
})

export const {
    useFetchUsersQuery,
    useFetchUserQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} = usersApi
