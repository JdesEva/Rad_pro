import ACTIONTYPE from '../action.types'

export function menu(state = {},action){
    switch(action.type){
        case ACTIONTYPE.updateMenu:
        return {...state,...action.payload}
        default:
        return state
    }
}