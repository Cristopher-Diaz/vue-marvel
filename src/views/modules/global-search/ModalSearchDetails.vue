<template>
  <b-modal 
    id="searchDetails" 
    title="Detalles de la búsqueda"
    size="lg"
    hide-footer>
    <div class="col-md-12">
      <!-- Primera fila -->
      <div class="row mb-2">
        <div class="col-md-4">
          <label><b> Nombre </b></label>
          <div class="ml-1"> {{ selectedField.name || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Titulo </b></label>
          <div class="ml-1"> {{ selectedField.title || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha modificación </b></label>
          <div class="ml-1"> {{ selectedField.modified || '--' }} </div>
        </div>
      </div>
      <!-- Segunda fila -->
      <div class="row mb-2">
        <div class="col-md-4">
          <label><b> Fecha inicio </b></label>
          <div class="ml-1"> {{ selectedField.start || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha termino </b></label>
          <div class="ml-1"> {{ selectedField.end || '--' }} </div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha modificación </b></label>
          <div class="ml-1"> {{ selectedField.modified || '--' }} </div>
        </div>
      </div>
      <!-- Descripción -->
      <div class="row mb-2">
        <div class="col-md-12">
          <label><b> Descripción </b></label>
          <div class="ml-1">
            {{ selectedField.description || '--' }}
          </div>
        </div>
      </div>
      <!-- Imagen -->
      <div class="row mb-2">
        <div class="col-md-12">
          <label class="d-block"><b> Miniatura </b></label>
          <div class="mx-auto text-center">
            <img width="400" height="300" :src="selectedField.thumbnail.path+'.'+selectedField.thumbnail.extension" alt="">
          </div>
        </div>
        <div class="col-md-12">
          <label class="d-block"><b> URL Miniatura </b></label>
          <div class="ml-1">
            <a target="_blank" :href="selectedField.thumbnail.path+'.'+selectedField.thumbnail.extension">{{ selectedField.thumbnail.path+'.'+selectedField.thumbnail.extension }}</a>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'modalSearchDetails',
  props: ['selectedField']

}
</script>

<style>

</style>