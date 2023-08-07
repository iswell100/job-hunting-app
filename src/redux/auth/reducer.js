import * as types from './constants'

const initialState = {
    user: null,
    loading: false,
    error: null
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.POST_SIGNIN_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        case types.POST_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.data,
            }
        case types.POST_SIGNIN_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        }
        default:
            return state;
    }
}