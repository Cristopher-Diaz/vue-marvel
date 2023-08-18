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
  methods: {
    selectedField(data) {
      this.selectedSearch = data
      this.$bvModal.show('searchDetails')
    }
  },
  computed: {
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