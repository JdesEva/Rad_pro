/**
 * 组合reducer
 */

import * as token from './reducers/token'

import * as http from './reducers/http'

import * as menu from './reducers/menu'

import * as drawer from './reducers/drawer'

import { combineReducers } from 'redux'



export default combineReducers({
    ...token,
    ...http,
    ...menu,
    ...drawer
})