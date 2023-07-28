import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import cartReducer from './cartReducer'
import wishListReducer from './wishListReducer'
import likeCounterReducer from './likeCounterReducer'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInFavorite: wishListReducer,
        productsInCart: cartReducer,
        likeCounter: likeCounterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
