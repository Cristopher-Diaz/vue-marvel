<template>
  <b-container>
    <h1>Listado de heroes</h1>
    <card-render :cardData="marvelData" :orderCards="3" :loadingCard="loading.card" @sendData="btnInfo"></card-render>
    <pagination-nav class="d-flex justify-content-center mt-4" :totalRows="rows" :perPage="perPage" @page-changed="currentPage"></pagination-nav>
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
    },
    currentPage(page) {
      this.scrollToTop()
      this.charactersService.callService('getCharacters', {}, {offset: ((this.perPage * page) - this.perPage)})
      .then(res => {
        this.loading.card = true
        this.marvelData = res.data.data.results
      })
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  mounted() {
    this.charactersService.callService('getCharacters', {}, {offset: 0})
      .then(res => {
        this.loading.card = true
        this.rows = res.data.data.total
        this.perPage = res.data.data.limit
        this.marvelData = res.data.data.results
      })
  }
}
</script>