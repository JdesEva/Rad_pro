/**
 * 组合reducer
 */

import * as reducers from './reducers/moduleA'

import { combineReducers } from 'redux'

console.log(reducers)


export default combineReducers({
    ...reducers
})