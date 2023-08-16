<template>
  <b-container>
    <h1 class="mt-2"> 
      <span>{{searches.length}}</span> 
      búsquedas relacionadas
    </h1>
    <table-render :rows="searches" :fields="fields"></table-render>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      searches: JSON.parse(this.$route.params.relatedSearches),
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' }
      ]
    }
  }
}
</script>