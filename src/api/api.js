import axios from 'axios'
import { message } from 'antd'

import store from '../store/store'

// http request 拦截器
axios.interceptors.request.use(config => {
  if (store.getState().token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = store.getState().token
  }
  return config
},
  err => {
    message.warning('参数错误');
    return Promise.reject(err)
  })


// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      //
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default axios