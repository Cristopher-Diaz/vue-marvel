<template>
  <b-container>
    <h1 class="mt-2"> 
      <span>{{formattedSearches.length}}</span> 
      búsquedas relacionadas
    </h1>
    <table-render :rows="formattedSearches" :fields="fields"></table-render>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      searches: JSON.parse(this.$route.params.relatedSearches),
      fields: [
        { key: 'index', label: 'Posición'},
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'title', label: 'Título' },
        { key: 'actions', label: 'Acciones' }
      ]
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