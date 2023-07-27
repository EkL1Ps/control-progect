import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type wishListState = {
    [id: number]: number
}

const initialState: wishListState = {1: 2}

export const wishListSlice = createSlice({
    name: 'addToFavorite',
    initialState,
    reducers: {
        addProductToFavorite: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
        removeProductFromFavorite: (state, action) =>
            omit(state, action.payload),
    },
})

export const { addProductToFavorite, removeProductFromFavorite } =
    wishListSlice.actions

export default wishListSlice.reducer
