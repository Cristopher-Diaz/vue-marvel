<template>
  <div>
    <header>
      <h1>Sección de eventos</h1>
    </header>
    <div class="main-section">
      <table-render :rows="marvelEvents" :fields="fields" @sendData="showMoreDetails" @sendDataToDelete="removeEvent"></table-render>
    </div>

    <!-- Modals -->
    <modal-event-details :selectedEvent="selectedEvent"></modal-event-details>
  </div>
</template>

<script>
import EventsService from "./events.service"
import ModalEventDetails from "./ModalEventDetails.vue"

export default {
  name: 'EventsView',
  components: { ModalEventDetails },
  data () {
    return {
      rows: [],
      // Headers de la tabla
      fields: [
        { key: 'id', label: 'ID' },
        { key: 'title', label: 'Nombre del evento' },
        { key: 'previous.name', label: 'Nombre del evento anterior' },
        { key: 'next.name', label: 'Nombre del evento siguiente' },
        { key: 'modified', label: 'Fecha de modificación' },
        { key: 'actions', label: 'Acciones' }
      ],
      selectedEvent: {},
      marvelEvents: [],
      eventsService: new EventsService(this),
    }
  },
  mounted () {
    this.getEventsFromMarvel()
  },
  methods: {
    /**
     * Función GET para los eventos de Marvel
     */
    getEventsFromMarvel () {
      this.eventsService.callService('getEvents', null)
        .then(res => {
          this.marvelEvents = res.data.data.results
        })
    },
    /**
     * Función que levanta el modal para "ver detalles" 
     * @param {Obj} data Objeto que contiene la data del evento asociado
     */
    showMoreDetails (data) {
      this.selectedEvent = data
      this.$bvModal.show('eventDetails')
    },
    /**
     * Función para eliminar un item de la tabla (Falta instalar sweet alert)
     * @param {Number} id id del evento a eliminar
     */
    removeEvent (id) {
      console.log(id)
    }
  }
}
</script>

<style>

</style>