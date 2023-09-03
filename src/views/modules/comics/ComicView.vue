<template>
  <b-container>
    <!-- Renderiza la tabla de cómics utilizando el componente table-render -->
    <table-render
      :rows="marvelComics"
      :fields="fields"
      @sendData="detailsComic"
      @sendDataToDelete="deleteComic"
    ></table-render>
    <pagination-nav
      :totalRows="totalRows"
      :perPage="perPage"
      :showSelect="true"
      @page-changed="onChangePage"
      @amount-characters="amountCharacters"
    ></pagination-nav>
    <modal-detail-comics :marvelDetail="marvelDetail"></modal-detail-comics>
  </b-container>
</template>

<script>
import comicsService from "./comics.service";
import ModalDetailComics from "./ModalDetailComics.vue";

export default {
  components: { ModalDetailComics },
  name: "ComicView",
  data() {
    return {
      // Array con los nombres de los campos en la cabecera de la tabla
      // key: Información del array a iterar en la tabla
      // label: Nombre de la cabecera a mostrar en la tabla
      fields: [
        { key: "id", label: "ID" },
        { key: "title", label: "Nombre del comic" },
        { key: "pageCount", label: "Total de páginas" },
        { key: "modified", label: "Ultimos cambios" },
        { key: "actions", label: "Acciones" },
      ],
      // Instancia del service que hace el llamado a la API
      comicsService: new comicsService(this),
      // Array con info para mostrar el contenido de la tabla
      marvelComics: [],
      marvelDetail: {},
      totalRows: null,
      perPage: null,
      limit: null,
      page: 1
    };
  },
  methods: {
    // Método para obtener los cómics a través del servicio
    getComics() {
    const offset = this.perPage * this.page - this.perPage
    this.comicsService
      .callService('getComics', {}, {
        offset: offset,
        limit: this.perPage || 20,
      })
      .then((res) => {
        this.marvelComics = res.data.data.results
        this.totalRows = res.data.data.total
        this.perPage = res.data.data.limit
        this.marvelComics.forEach((comic) => {
          if (comic.modified) {
            comic.modified = this.dateFormat(comic.modified)
          }
        });
      })
  },
    onChangePage(page){
      this.page = page
      this.scrollToTop();
      this.getComics()
      
    },
    amountCharacters(data) {
      this.perPage = data
      console.log(data)
      this.getComics()
    },

    // Función para formatear la fecha
    dateFormat(date) {
      
      return new Date(date).toLocaleDateString("en-GB");
    },
    // Función para mostrar una alerta
    alert() {
      this.$swal.fire("Any fool can use a computer");
    },
    detailsComic(dataComic) {
      this.marvelDetail = dataComic;
      this.$bvModal.show("modal-detail");
    },
    deleteComic(id) {
      this.$swal({
        title: "Estas seguro?",
        text: "No puedes volver esta accion :(",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar D:",
        cancelButtonText: "Cancelar :D",
      }).then((result) => {
        if (result.isConfirmed) {
          this.marvelComics = this.marvelComics.filter((comic) => comic.id !== id);
        }
      });
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    // Llamada al método getComics al montar el componente
    this.getComics(this.page)
  },
};
</script>
