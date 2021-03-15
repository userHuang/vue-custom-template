import Server from '@/extend/Server'

export default class BaseServer {
  constructor (host) {
    this.httpHost = host
  }
  request (params) {
    const baseParams = {
      url: `${this.httpHost}${params.url}`
    }
    Object.assign(params, baseParams)
    return Server(params)
  }
}