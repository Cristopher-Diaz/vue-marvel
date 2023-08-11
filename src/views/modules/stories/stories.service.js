import axios from 'axios'
const services = [
  { name: 'getStories', url: `https://gateway.marvel.com:443/v1/public/stories`, method: 'get'}
]

export default class StoriesService  {
  constructor() {
    this.envUrlParams = {
      ts: 1,
      apikey: '980c22f78b757fbd27daa5f16663af6f',
      hash: '7b790268939f2e1b3a4f86098b0655f5'
    }
  }
  /**
   * Función que genera una request
   * @param {String} name Nombre del servicio a consumir
   */
  async callService (name, pathParams = {}, urlParams = {}) {
    const service = services.filter(service => service.name === name)[0]
    const serviceUrl = this.validateUrlParams(this.validatePathParams(service.url, pathParams), urlParams)
    return axios({
        method: service.method,
        url: serviceUrl,
        responseType: 'json'
    })
  }

  validatePathParams(serviceUrl, pathParams) {
    const keys = Object.keys(pathParams)
    return keys.length > 0 ? keys.map(key => serviceUrl = serviceUrl.replace(key, pathParams[key]))[0] : serviceUrl
  }

  validateUrlParams(serviceUrl, urlParams) {
    const objUrl = {
      ...urlParams,
      ...this.envUrlParams
    }
    
    return serviceUrl + '?' + new URLSearchParams(objUrl).toString()
  }
}