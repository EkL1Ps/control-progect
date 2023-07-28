import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type LikeState = {
    [id: number]: boolean
}

const initialState: LikeState = {}

export const LikeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
        // addProductToFavorite: (state, action) => ({
        //     ...state,
        //     [action.payload.id]:
        //         (state[action.payload.id] || 0) + action.payload.count,
        // }),
        // removeProductFromFavorite: (state, action) =>
        //     omit(state, action.payload),
    },
})

export const { toggleLike } = LikeSlice.actions

export default LikeSlice.reducer
