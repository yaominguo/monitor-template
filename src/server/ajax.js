import axios from 'axios'
import qs from 'qs'
import api from './api'
import Store from '@/store'

const Axios = axios.create({
  baseURL: api.BASE_URL,
  timeout: 15000,
})
Axios.interceptors.request.use(config => {
  // 添加token
  // config.headers.Authorization = 'token'
  return config
}, error => {
  return Promise.reject(error)
})

Axios.interceptors.response.use(response => {
  // TODO 返回的数据status判断错误操作等……
  Store.commit('SET_LOADING', false)
  return response.data
}, error => {
  Store.commit('SET_LOADING', false)
  return Promise.resolve(error.response)
})

/**
 * 请求
 * @param {String} method [请求方法]
 * @param {String} url [请求地址]
 * @param {Object} params [请求参数]
 * @param {String} contentType [请求头，默认为'application/json;charset=UTF-8']
 * @param {Boolean} showLoading [是否显示请求时的loading图，默认为true]
 */
const request = ({ method, url, params = {}, contentType = 'application/json;charset=UTF-8', showLoading = true }) => {
  if (!url || typeof(url) != 'string') {
    throw new Error('接口URL不正确')
  }
  let config = {
    method,
    url,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
    },
  }
  if (method === 'GET') {
    config = Object.assign(config, { params })
  } else {
    if (contentType.toLowerCase().indexOf('x-www-form-urlencoded') >= 0) {
      config = Object.assign(config, { data: qs.stringify(params) })
    } else {
      config = Object.assign(config, { data: params })
    }
  }
  if (showLoading) {
    Store.commit('SET_LOADING', true)
  }
  return Axios(config)
}

export default {
  get(args) {
    return request({ method: 'GET', ...args })
  },
  post(args) {
    args.contentType = 'application/x-www-form-urlencoded;charset=UTF-8'
    return request({ method: 'POST', ...args })
  },
  put(args) {
    return request({ method: 'PUT', ...args })
  },
  delete(args) {
    return request({ method: 'DELETE', ...args })
  },
  all(...ajaxs) {
    return Promise.all(ajaxs)
  },
}
