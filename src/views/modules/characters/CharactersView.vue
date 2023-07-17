<template>
  <div>
    <h1>Listado de heroes</h1>
    <card-render :cardData="marvelData" :orderCards="3" :loadingCard="true" @sendData="marvelData"></card-render>
  </div>
</template>

<script>
import CharactersService from "./characters.service";
export default {
  name: 'CharactersView',
  data() {
    return {
      charactersService: new CharactersService(this),
      marvelData: []
    }
  },
  methods: {},
  mounted() {
    this.charactersService.callService('getCharacters')
      .then(res => this.marvelData = res.data.data.results)
  }
}
</script>

<style>
</style>