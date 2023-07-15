<template>
  <b-container>
    <table-render :rows="marvelComics" :fields="fields"></table-render>
    <card-render></card-render>
  </b-container>
</template>

<script>
import CharactersService from "./modules/characters/characters.service"

export default {
  name: 'AboutView',
  data() {
    return {
      // Array con los nombres de los campos en la cabecera de la tabla
      // key: Información del array a iterar en la tabla
      // label: Nombre de la cabecera a mostrar en la tabla
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Nombre del comic' },
        { key: 'pageCount', label: 'Total de páginas' },
        { key: 'modified', label: 'Ultimos cambios' },
        { key: 'actions', label: 'Acciones' }
      ],
      // Instancia del service que hace el llamado a la API
      comicsService: new CharactersService(this),
      // Array con info para mostrar el contenido de la tabla 
      marvelComics: []
    }
  },
  // Al momento de cargar la vista se llama a la API y se crea un objeto con la info justa para mandarla al array de marvelComics
  mounted() {
    this.comicsService.callService('getComics')
      .then(res => res.data.data.results.forEach(data => {
        const dataObj = {
          id: data.id,
          title: data.title,
          pageCount: data.pageCount,
          modified: this.dateFormat(data.modified)
        }
        this.marvelComics.push(dataObj)
      }))
  },
  // Formateo de fecha
  methods: {
    dateFormat(date) {
      return new Date(date).toLocaleDateString('en-GB')
    }
  }
}
</script>