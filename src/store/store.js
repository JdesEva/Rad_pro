/**
 * 组装redux
 */


import { createStore, applyMiddleware } from 'redux'

import reducer from './combineReducer'

import __state from './__state'

import logger from './middleware/logger'

import persistent from './middleware/persistent'

export default createStore(reducer, __state, applyMiddleware(persistent, logger))