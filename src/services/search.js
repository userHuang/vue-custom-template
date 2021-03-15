import Config from '@/extend/config'
import BaseServer from '@/services/baseServer.js'

const Services = new BaseServer(Config.baiduHost)
// {get: params, post: data}
export default {
  searchValue (data) {
    return Services.request({
      url: 's',
      params: data,
      method: 'get'
    })
  }
}