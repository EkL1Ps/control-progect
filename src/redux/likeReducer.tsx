import { AnyAction } from 'redux'

type LikeState = {
    [id: number]: boolean
}

const initialState: LikeState = { 1: true, 3: true }

export const likeReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'TOGGLE_LIKE': {
            return {
                ...state,
                [action.id]: !state[action.Id],
            }
        }
        default:
            return state
    }
}
