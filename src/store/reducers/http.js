import ACTIONTYPE from '../action.types'

export function http(state = {}, action) {
    switch (action.type) {
        case ACTIONTYPE.http:
            return { ...state, ...action.payload }
        case ACTIONTYPE.resetHttp:
            return action.payload
        default:
            return state
    }
}