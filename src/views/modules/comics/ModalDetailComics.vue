<template>
  <b-modal id="modal-detail" title="Detalles comic" size="lg" hide-footer>
    <div class="col-md-12">
      <!-- Primera fila -->
      <div class="row mb-2">
        <div class="col-md-4">
          <label><b> ID comic </b></label>
          <div class="ml-1">{{ marvelDetail.id || "--" }}</div>
        </div>
        <div class="col-md-4">
          <label><b> Titulo comics </b></label>
          <div class="ml-1">{{ marvelDetail.title || "--" }}</div>
        </div>
        <div class="col-md-4">
          <label><b> Fecha comic </b></label>
          <div class="ml-1">{{ marvelDetail.modified || "--" }}</div>
        </div>
      </div>
      <!-- Segunda fila -->
      <div class="row mb-2">
        <div class="col-md-4">
          <label><b> Número de edición </b></label>
          <div class="ml-1">{{ marvelDetail.issueNumber || "--" }}</div>
        </div>
        <div class="col-md-4">
          <label><b> Número de paginas</b></label>
          <div class="ml-1">{{ marvelDetail.pageCount || "--" }}</div>
        </div>
        <div class="col-md-4">
          <label><b> Precio</b></label>
          <div class="ml-1">{{ marvelDetail.prices.price || "--" }}</div>
        </div>
        <!--  descripcion -->
        <div class="col-md-12 text-center">
          <label><b> Descripción </b></label>
          <div class="ml-1">{{ marvelDetail.description || "--" }}</div>
        </div>
        <!-- imagen -->
        <div class="col-md-12">
          <label class="d-block text-center"><b> Miniatura </b></label>
          <div class="mx-auto text-center">
            <img
              width="400"
              height="300"
              :src="
                marvelDetail.thumbnail.path +
                '.' +
                marvelDetail.thumbnail.extension
              "
              alt="Imagen Comic"
            />
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["marvelDetail"],
};
</script>

<style>
</style>