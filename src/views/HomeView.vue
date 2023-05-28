<template>
  <b-container>
    <h1>Hola</h1>
    <!-- Disculpe la roteria... es solo un test -->
    <div v-for="heroe in heroesResponse" :key="heroe.id">
      <h3>{{ heroe.name }}</h3>
      <img :src="heroe.thumbnail.path+'.'+heroe.thumbnail.extension">
    </div>
  </b-container>
</template>

<script>
import HeroesService from './modules/heroes/heroes.service'
export default {
  name: 'HomeView',
  data () {
    return {
      heroesResponse: null,
      heroesService: new HeroesService(this)
    }
  },
  methods: {
      
  },
  mounted () {
    console.log(this.heroesService)
    this.heroesService.callService('getHeroes', null)
      .then(resp => {
        console.log(resp.data.data.results)
        this.heroesResponse = resp.data.data.results
      })
  }
}
</script>
