import ACTIONTYPE from '../action.types'

export function login(state = 0, action) {
    switch (action.type) {
        case ACTIONTYPE.login:
            return action.payload
        default:
            return state
    }
}
