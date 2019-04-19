import ACTIONTYPE from '../action.types'

export function httpError(state = {}, action) {
    switch (action.type) {
        case ACTIONTYPE.httpError:
            return { ...state, ...action.payload }
        case ACTIONTYPE.resetError:
            return action.payload
        default:
            return state
    }
}