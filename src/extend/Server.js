
import axios from 'axios'
import Config from './config'
var instance = axios.create({
  baseURL: Config.host,
  timeout: 60 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  trimNull: false, // 是否去除空值
  withCredentials: true, // default
  needLoading: false, // 是否需要加载效果
  ignoreCode: false,
  crossDomain: true
})
instance.interceptors.request.use(function (config) {
  const timeStamp = {
    _t: new Date().getTime()
  }
  if (config.params) {
    Object.assign(config.params, timeStamp)
  } else {
    config.params = timeStamp
  }
  config.data = config.data || {}
  if (config.trimNull && !(config.data instanceof window.FormData)) {
    let _data = Object.assign({}, config.data)
    isNull(_data)
    config.data = _data
  }
  return config
  function isNull (obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (!value && typeof value != 'number') {
        obj[ key ] = null
        return
      }
      if (typeof value == 'object' && !(value instanceof Date)) isNull(value)
    }
  }
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (response.config.needLoading) {
    console.log(response, '====response===')
  }
  var code = response.data.result ? response.data.result == 0 ? '0' : (response.data.result || '') : response.data.error ? (response.data.error.code || '') : ''
  if (code != 1 && !response.config.ignoreCode) {
    switch (code) {
      default:
        console.log(response)
    }
    return Promise.reject(response)
  } else {
    return response
  }
}, function (error) {
  console.log(error)
  var status = error.response && error.response.status
  // var message = error.message
  if (status != 200) {
    
  }
  return Promise.reject(error)
})

export default instance
