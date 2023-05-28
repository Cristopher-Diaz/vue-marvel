import axios from 'axios'
const services = [
  { name: 'getHeroes', url: `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=980c22f78b757fbd27daa5f16663af6f&hash=7b790268939f2e1b3a4f86098b0655f5`, method: 'get'}
]

export default class HeroesService  {

  async callService (name, queryParams = {}) {
    const service = services.filter(service => service.name === name)[0]
    console.log(service, queryParams)
    return axios({
        method: service.method,
        url: service.url,
        responseType: 'json'
    })
  }
}