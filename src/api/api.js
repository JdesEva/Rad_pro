/**
 * axios 配置
 */

import axios from 'axios'
import { message } from 'antd'

import store from '../store/store'

import ACTIONTYPE from '../store/action.types'


// http request 拦截器
axios.interceptors.request.use(config => {
  if (store.getState().token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = store.getState().token
  }
  return config
},
  err => {
    message.warning('参数错误')
    return Promise.reject(err)
  })


// http response 拦截器
axios.interceptors.response.use(
  response => {
    store.dispatch({ type: ACTIONTYPE.http, payload: { status: response.status, msg: response.data.msg, success: false } })
    //将返回结果统一 扔进 redux 触发提示信息
    return response
  },
  error => {
    if (error.response) {
      console.log(error.response, window.location)
      switch (error.response.status) {
        case 401:
          message.error(`${error.response.statusText} 无权限`)
          break
        case 500:
          message.error(`${error.response.statusText} 后台出错，请联系研发人员`)
          break
        default:
          message.error(`${error.response.statusText} 未知错误`)
          break
      }
      //将错误信息 扔进redux 触发消息提示
      store.dispatch({ type: ACTIONTYPE.http, payload: { status: error.response.status, msg: error.response.statusText, success: false } })
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default axios