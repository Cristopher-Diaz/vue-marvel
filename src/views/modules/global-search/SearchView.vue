<template>
  <b-container>
    <h1 class="mt-2"> 
      <span>{{formattedSearches.length}}</span> 
      búsquedas relacionadas
    </h1>

    <table-render :rows="formattedSearches" :fields="fields" @sendData="selectedField"></table-render>

    <modal-search-details :selectedField="selectedSearch"></modal-search-details>
  </b-container>
</template>

<script>
import ModalSearchDetails from "./ModalSearchDetails"

export default {
  components: { ModalSearchDetails },
  data() {
    return {
      searches: JSON.parse(this.$route.params.relatedSearches),
      selectedSearch: {},
      fields: [
        { key: 'index', label: 'Posición'},
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'title', label: 'Título' },
        { key: 'actions', label: 'Acciones' }
      ]
    }
  },
  /**
   * El campo seleccionado mediante el botón de más detalles renderiza con el uso de un modal la información adicional 
   * @param { Obj } data Objeto que se muestra en el modal
   */
  methods: {
    selectedField(data) {
      this.selectedSearch = data
      this.$bvModal.show('searchDetails')
    }
  },
  computed: {
    /**
   * Retorna un array con objetos modificados para que al momento de mostrar la información de forma general si un objeto no posee cierto atributo no sea undefined y posea una respuesta por defecto
   */
    formattedSearches() {
      return this.searches.map(search => ({
        ...search,
        name: search.name || '--',
        title: search.title || '--'
      }))
    }
  }
}
</script>