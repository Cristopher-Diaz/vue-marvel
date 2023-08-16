<template>
  <b-container>
    <!-- Renderiza la tabla de cómics utilizando el componente table-render -->
    <table-render :rows="marvelComics" :fields="fields"></table-render>
    
    <!-- Renderiza el componente card-render -->
    <card-render></card-render>
  </b-container>
</template>

<script>
import comicsService from "./comics.service";

export default {
  name: 'ComicView',
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
      comicsService: new comicsService(this),
      // Array con info para mostrar el contenido de la tabla 
      marvelComics: [],
    };
  },
  methods: {
    // Método para obtener los cómics a través del servicio
    getComics() {
      this.comicsService
        .callService("getComics", { comics_id: this.$route.params.id }, {})
        .then(res => {
          //console.log(res.data.data.results);
          this.marvelComics = res.data.data.results;
        });
    },
    // Función para formatear la fecha
    dateFormat(date) {
      return new Date(date).toLocaleDateString('en-GB');
    },
    // Función para mostrar una alerta
    alert() {
      this.$swal.fire('Any fool can use a computer');
    },
  },
  mounted() {
    // Llamada al método getComics al montar el componente
    this.getComics();
  }
};
</script>
