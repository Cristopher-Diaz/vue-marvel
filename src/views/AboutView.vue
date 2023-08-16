<template>
  <b-container>
    <!-- <table-render :rows="marvelComics" :fields="fields"></table-render>
    <card-render></card-render>
    <b-button variant="dark" @click="alert()">boton</b-button> -->

    <gallery-render :galleryData="marvelData"></gallery-render>
  </b-container>
</template>

<script>
// import comicsService from "./modules/comics/comics.service"
import CharactersService from "./modules/characters/characters.service";

export default {
  name: 'AboutView',
  data() {
    return {
      charactersService: new CharactersService(this),
      marvelData: [],
      // Array con los nombres de los campos en la cabecera de la tabla
      // key: Información del array a iterar en la tabla
      // label: Nombre de la cabecera a mostrar en la tabla
      // fields: [
      //   { key: 'id', label: 'ID' },
      //   { key: 'title', label: 'Nombre del comic' },
      //   { key: 'pageCount', label: 'Total de páginas' },
      //   { key: 'modified', label: 'Ultimos cambios' },
      //   { key: 'actions', label: 'Acciones' }
      // ],
      // Instancia del service que hace el llamado a la API
      // comicsService: new comicsService(this),
      // Array con info para mostrar el contenido de la tabla 
      // marvelComics: []
    }
  },
  // Al momento de cargar la vista se llama a la API y se crea un objeto con la info justa para mandarla al array de marvelComics
  mounted() {
    // fetch API
    this.charactersService.callService('getCharacters')
      .then(res => {
        this.marvelData = res.data.data.results.map(element => {
          return {
            ...element,
            title: element.name,
            date: element.modified,
            description: element.description,
          }
        })
        console.log(this.marvelData)
      })
  },
  // Formateo de fecha
  methods: {
    // dateFormat(date) {
    //   return new Date(date).toLocaleDateString('en-GB')
    // },
    // alert(){
    //   this.$swal.fire('Any fool can use a computer')
    // }
  }
}
</script>