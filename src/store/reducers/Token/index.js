import ACTIONTYPE from '../../action.types'

export function token(state = '', action) {
    switch (action.type) {
        case ACTIONTYPE.updateToken:
            return action.payload
        default:
            return state
    }
}
