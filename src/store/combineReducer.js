/**
 * 组合reducer
 */

import * as token from './reducers/token'

import * as httpError from './reducers/httpError'

import * as menu from './reducers/menu'

import { combineReducers } from 'redux'



export default combineReducers({
    ...token,
    ...httpError,
    ...menu
})