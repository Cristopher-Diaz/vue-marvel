<template>
  <b-container>
    <h1>Listado de heroes</h1>
    <card-render :cardData="marvelData" :orderCards="3" :loadingCard="loading.card" @sendData="btnInfo"></card-render>
    <pagination-nav class="d-flex flex-column justify-content-center align-items-center mt-5" :totalRows="rows" :perPage="perPage" @page-changed="currentPage" :showSelect="true" @amount-characters="numberCharacters"></pagination-nav>
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
    /**
     * Al hacer click a "conocer más" empuja al usuario a la vista del character en específico
     * @param { Obj } data Correspondiente a la información del personaje
     */
    btnInfo(data) {
      this.$router.push(`/character/${data.id}`)
    },
    /**
     * Llamado a la api de characters con parámetros dinámicos
     * @param { Obj } urlParams Datos de url (offset, total, limit, etc)
     * @param { Boolean } firstLoad habilita la carga de datos necesaria cada vez que se carga la vista
     */
    getCharacters(urlParams, firstLoad) {
      this.charactersService.callService('getCharacters', {}, urlParams)
        .then(res => {
          this.loading.card = true
          this.marvelData = res.data.data.results
          if(firstLoad) {
            this.actualPage = 1
            this.rows = res.data.data.total
            this.perPage = res.data.data.limit
          }
        })
    },
    /**
     * Utiliza la función de llamado de characters para mostrar los personajes de acuerdo a la página actual
     * @param { Number } page Página actual de búsqueda
     */
    currentPage(page) {
      this.scrollToTop()
      this.actualPage = page
      this.getCharacters({offset: ((this.perPage * page) - this.perPage), limit: this.amountCharacters ? this.amountCharacters : 20 })
    },
    /**
     * Utiliza la función de llamado de characters para mostrar la cantidad de personajes por página de acuerdo a "amount" (valor rescatado del select)
     * @param { Number } amount Cantidad de personajes a mostrar por página
     */
    numberCharacters(amount) {
      this.scrollToTop()
      this.perPage = amount
      this.amountCharacters = amount
      this.getCharacters({offset: ((this.actualPage * amount) - amount), limit: amount })
    },
    /**
     * Función que te lleva al inicio de la página subiendo lentamente
     */
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  },
  mounted() {
    this.getCharacters({offset: 0}, true)
  }
}
</script>