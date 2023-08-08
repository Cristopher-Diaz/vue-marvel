<template>
  <b-container>
    <h1>Listado de heroes</h1>
    <card-render :cardData="marvelData" :orderCards="3" :loadingCard="loading.card" @sendData="btnInfo"></card-render>
    <pagination-nav class="d-flex flex-column justify-content-center align-items-center mt-4" :totalRows="rows" :perPage="perPage" @page-changed="currentPage" :showSelect="true" @amount-characters="numberCharacters"></pagination-nav>
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
      actualPage: null,
      amountCharacters: null,
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
      this.actualPage = page
      this.charactersService.callService('getCharacters', {}, {offset: ((this.perPage * page) - this.perPage), limit: this.amountCharacters ? this.amountCharacters : 20})
        .then(res => {
          this.loading.card = true
          this.marvelData = res.data.data.results
        })
    },
    numberCharacters(amount) {
      this.scrollToTop()
      this.perPage = amount
      this.amountCharacters = amount
      this.charactersService.callService('getCharacters', {}, {offset: ((this.actualPage * amount) - amount), limit: amount})
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
        this.actualPage = 1
        this.rows = res.data.data.total
        this.perPage = res.data.data.limit
        this.marvelData = res.data.data.results
      })
  }
}
</script>