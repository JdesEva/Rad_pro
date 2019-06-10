/**
 * axios 配置
 */

import axios from 'axios'
import { message } from 'antd'

import store from '../store/store'
import ACTIONTYPE from '../store/action.types'

/**
 * 全局提示配置
 */
message.config({
  duration: 2,
  maxCount: 2
})

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/api' : ''

const pending = [] //请求队列
const cancelToken = axios.CancelToken //axios abort

/**
 * 辅助函数,移除已经完成的请求
 */
const removePending = ev => {
  var uid = ev.data ? JSON.stringify(ev.data) : 'undefined'
  console.log(uid)
  var index = pending.findIndex(row => {
    return row.url === ev.url && uid === row.uid
  })
  if (index > -1) {
    pending[index].cancel()
    pending.splice(index, 1)
  }
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    removePending(config) //移除重复的请求
    //部署 abort
    var uid = config.data ? JSON.stringify(config.data) : 'undefined'
    config.cancelToken = new cancelToken(fn => {
      pending.push({ url: config.url, cancel: fn, uid: uid })
    })
    console.log('pending', pending)
    if (store.getState().token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = store.getState().token
    }
    return config
  },
  err => {
    message.warning(err)
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    /**
     * 统一触发消息提示
     */
    if (response.data.success) {
      message.success(response.data.msg)
    } else {
      message.warn(response.data.msg)
    }
    removePending(response.config) //请求成功则移出请求队列
    return response
  },
  error => {
    if (error.response) {
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
      //将错误信息 扔进redux 触发路由重定向
      store.dispatch({
        type: ACTIONTYPE.http,
        payload: {
          status: error.response.status,
          msg: error.response.statusText
        }
      })
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)

export default axios
