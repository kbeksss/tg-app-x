import { baseApi } from '../xhr/rtk';
import { AUTH_URL } from './constants';

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: AUTH_URL,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
