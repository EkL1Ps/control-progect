import { createSlice } from "@reduxjs/toolkit"

type likeCounterState = {
    likeCounter: number
}

const initialState: likeCounterState = {
    likeCounter: 0
}

export const likeCounterSlice = createSlice({
    name: 'likeCounter',
    initialState,
    reducers: {
        likeIncrement: (state) => {
            state.likeCounter += 1;
        },
        likeDecrement: (state) => {
            state.likeCounter -= 1;
        },
    },
})

export const {likeIncrement, likeDecrement } = likeCounterSlice.actions

export default likeCounterSlice.reducer