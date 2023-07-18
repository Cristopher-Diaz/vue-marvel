<template>
  <div>
    <h1>Listado de heroes</h1>
    <card-render :cardData="marvelData" :orderCards="3" :loadingCard="loading.card" @sendData="btnInfo"></card-render>
  </div>
</template>

<script>
import CharactersService from "./characters.service";
export default {
  name: 'CharactersView',
  data() {
    return {
      charactersService: new CharactersService(this),
      marvelData: [],
      loading: {
        card: false
      }
    }
  },
  methods: {
    btnInfo(data) {
      this.$router.push(`/character/${data.id}`)
    }
  },
  mounted() {
    this.charactersService.callService('getCharacters')
      .then(res => {
        this.loading.card = true
        this.marvelData = res.data.data.results
      })
  }
}
</script>

<style>
</style>