import { baseApi } from '../xhr/rtk'
import { USER_FOLLOW_URL, USER_UNFOLLOW_URL, USERS_URL } from './constants'

export const usersApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchUsers: build.query({
            query: (params) => ({
                url: USERS_URL,
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
            invalidatesTags: [{ type: 'User' }],
        }),
        unfollowUser: build.mutation({
            query: (body) => ({
                url: USER_UNFOLLOW_URL,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'User' }],
        }),
    }),
})

export const {
    useFetchUsersQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
} = usersApi
