import Server from '@/extend/Server'
import Config from '@/extend/config'

class ContractServices {
  request (params) {
    const baseParams = {
      url: Config.host + params.url
    }
    Object.assign(params, baseParams)
    return Server(params)
  }
}

const Services = new ContractServices()

export default {
  getDetail (data) {
    return Services.request({
      url: '/chart/top_list',
      data: data,
      method: 'get'
    })
  }
}