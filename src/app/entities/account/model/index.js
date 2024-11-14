import { createSlice } from '@reduxjs/toolkit'
import { accountApi } from '@shared/api/services'

export const accountModel = createSlice({
    name: 'user',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            accountApi.endpoints.fetchAccount.matchFulfilled,
            (state, { payload }) => {
                state = payload
                return state
            }
        )
    },
})

const accountActions = accountModel.actions
export { accountActions }
export default accountModel.reducer
