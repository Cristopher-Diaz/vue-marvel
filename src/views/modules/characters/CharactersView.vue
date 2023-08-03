<template>
  <b-container>
    <h1>Listado de heroes</h1>
    <card-render :cardData="marvelData" :orderCards="3" :loadingCard="loading.card" @sendData="btnInfo"></card-render>
    <pagination-nav class="d-flex justify-content-center mt-4" :totalRows="rows" :perPage="perPage"></pagination-nav>
  </b-container>
</template>

<script>
import CharactersService from "./characters.service";
export default {
  name: 'CharactersView',
  data() {
    return {
      charactersService: new CharactersService(this),
      marvelData: [],
      rows: null,
      perPage: null,
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
    this.charactersService.callService('getCharacters', {}, {offset: 0})
      .then(res => {
        this.loading.card = true
        console.log(res.data.data)
        this.rows = res.data.data.total
        this.perPage = res.data.data.limit
        this.marvelData = res.data.data.results
      })
  }
}
</script>