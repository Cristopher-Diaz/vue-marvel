import axios from 'axios'
const services = [
  { name: 'getCharacters', url: 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=980c22f78b757fbd27daa5f16663af6f&hash=7b790268939f2e1b3a4f86098b0655f5', method: 'get'},
  { name: 'getCharacter', url: `https://gateway.marvel.com:443/v1/public/characters/character_id?ts=1&apikey=980c22f78b757fbd27daa5f16663af6f&hash=7b790268939f2e1b3a4f86098b0655f5`, method: 'get'}
]

export default class CharactersService  {
  /**
   * Función que genera una request
   * @param {String} name Nombre del servicio a consumir
   */
  async callService(name, pathParams = {}) {
    const service = services.filter(service => service.name === name)[0]
    const serviceUrl = this.validatePathParams(service.url, pathParams)
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
}