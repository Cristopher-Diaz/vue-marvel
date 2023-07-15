<template>
  <div class="mt-4">
    <div class="border rounded p-4">
      <!-- <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="m-0">Comics correspondientes a Marvel</p>
        <b-button variant="info">Ver más</b-button>
      </div> -->
      <div>
        <b-table :items="rows" :fields="fields" responsive fixed>
          <template #head(actions)="scope">
            <div class="text-center">{{ scope.label }}</div>
          </template>
          <template #cell(actions)="scope">
            <div class="text-center">
              <b-button variant="success" v-b-tooltip.hover title="Más detalles" @click="returnDataRow(scope.item)"><b-icon icon="arrow-up"></b-icon></b-button>
              <b-button variant="danger" class="ml-2" v-b-tooltip.hover title="Eliminar" @click="returnDataRow(scope.item)"><b-icon icon="exclamation-triangle"></b-icon></b-button>
            </div>
          </template>
          <template #head(calification)="scope">
            <div class="text-center">{{ scope.label }}</div>
          </template>
          <template #cell(calification)="scope">
            <div class="text-center">
              <b-badge pill variant="primary">
                {{ scope.item.calification }}
              </b-badge>
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * El componente recibira las siguintes 'props'
   * 1) rows: Corresponde a un array con la data a mostrar
   * 2) fields: Corresponde a un array que indica los nombres de cada columna de la tabla, el array debe 
   * tener la siguiente estructura:
   *  key: Información del array a iterar en la tabla
   *  label: Nombre de la cabecera a mostrar en la tabla
   */
  props: {
    rows: {
      type: Array,
      required: true
    },
    fields: {
      type: Array
    }
  },
  methods: {
    returnDataRow (rowData) {
      this.$emit('sendData', rowData)
    }
  }
};
</script>

<style>
</style>