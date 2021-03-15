
import axios from 'axios'
import Config from './config'
var instance = axios.create({
  baseURL: Config.host,
  timeout: 60 * 60 * 1000,
  headers: {},
  trimNull: false, // 是否去除空值
  withCredentials: false // default
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
  if (config.trimNull) {
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

instance.interceptors.response.use(response => {
  var code = response.status
  if (code === 200) {
    return {data: response.data}
  } else {
    return Promise.reject(response)
  }
}, error => {
  var status = error.response && error.response.status
  return Promise.reject({status})
})

export default instance
