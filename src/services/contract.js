import Config from '@/extend/config'
import BaseServer from '@/services/baseServer.js'

const Services = new BaseServer(Config.ceshiHost)
// {get: params, post: data}
export default {
  getTop (data) {
    return Services.request({
      url: 'j/chart/top_list',
      params: data,
      method: 'get'
    })
  }
}