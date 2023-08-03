<template>
  <b-modal 
    id="eventDetails" 
    title="Detalles de eventos"
    size="lg"
    hide-footer>
    <div class="col-md-12">
      <!-- Primera fila -->
      <div class="row mb-2">
        <div class="col-md-4">
          <label><b> ID Evento </b></label>
          <div class="ml-1"> {{ selectedEvent.id || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Titulo Evento </b></label>
          <div class="ml-1"> {{ selectedEvent.title || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha modificación </b></label>
          <div class="ml-1"> {{ selectedEvent.modified || '--' }} </div>
        </div>
      </div>
      <!-- Segunda fila -->
      <div class="row mb-2">
        <div class="col-md-4">
          <label><b> Fecha inicio </b></label>
          <div class="ml-1"> {{ selectedEvent.start || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha termino </b></label>
          <div class="ml-1"> {{ selectedEvent.end || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha modificación </b></label>
          <div class="ml-1"> {{ selectedEvent.modified || '--' }} </div>
        </div>
      </div>
      <!-- Tercera fila -->
      <div class="row mb-2">
        <div class="col-md-6">
          <label><b> Nombre del evento anterior </b></label>
          <div class="ml-1"> {{ selectedEvent.previous?.name || '--' }} </div>
        </div>
        <div class="col-md-6">
          <label><b> Nombre del evento siguiente </b></label>
          <div class="ml-1"> {{ selectedEvent.next?.name || '--' }} </div>
        </div>
      </div>
      <!-- Descripción -->
      <div class="row mb-2">
        <div class="col-md-12">
          <label><b> Descripción </b></label>
          <div class="ml-1">
            {{ selectedEvent.description || '--' }}
          </div>
        </div>
      </div>
      <!-- Imagen -->
      <div class="row mb-2">
        <div class="col-md-12">
          <label class="d-block"><b> Miniatura </b></label>
          <div class="mx-auto text-center">
            <img width="400" height="300" :src="selectedEvent.thumbnail.path+'.'+selectedEvent.thumbnail.extension" alt="">
          </div>
        </div>
        <div class="col-md-12">
          <label class="d-block"><b> URL Miniatura </b></label>
          <div class="ml-1">
            <a target="_blank" :href="selectedEvent.thumbnail.path+'.'+selectedEvent.thumbnail.extension">{{ selectedEvent.thumbnail.path+'.'+selectedEvent.thumbnail.extension }}</a>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'modalEventDetails',
  props: ['selectedEvent']

}
</script>

<style>

</style>