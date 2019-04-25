import ACTIONTYPE from '../action.types'

export function drawer(state = {}, action) {
    switch (action.type) {
        case ACTIONTYPE.drawer:
            return { ...state, ...action.payload }
        default:
            return state
    }
}