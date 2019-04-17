/**
 * 组合reducer
 */

import * as reducers from './reducers/moduleA'

import * as token from './reducers/Token'

import { combineReducers } from 'redux'

console.log(reducers)


export default combineReducers({
    ...reducers,
    ...token
})