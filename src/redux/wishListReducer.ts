import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type wishListState = {
    [id: number]: number
}

const initialState: wishListState = {}

export const wishListSlice = createSlice({
    name: 'addToFavorite',
    initialState,
    reducers: {
        addProductToFavorite: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.status,
        }),
        removeProductFromFavorite: (state, action) =>
            omit(state, action.payload.id),
    },
})

export const { addProductToFavorite, removeProductFromFavorite } =
    wishListSlice.actions

export default wishListSlice.reducer
