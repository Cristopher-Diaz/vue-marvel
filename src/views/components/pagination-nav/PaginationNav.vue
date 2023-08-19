<template>
  <div>
    <!-- Navegation boostrap component -->
    <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        aria-controls="my-table"
        last-number
        size="lg"
        @input="pageChanged"
      >
    </b-pagination>
    <!-- Selector page -->
    <div class="mb-3" v-if="showSelect">
      <b-form-select v-model="selected" :options="options" @input="amountCharacters"></b-form-select>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      // Total de datos a mostrar 
      totalRows: {
        type: Number
      },
      // Cantidad de datos a mostrar por llamado a la api
      perPage: {
        type: Number
      },
      // Habilitar o deshabilitar selector
      showSelect: {
        type: Boolean
      }
    },
    data() {
      return {
        currentPage: 1,
        selected: null,
        options: [
          { value: null, text: 'Elige la cantidad de datos a visualizar por página', disabled: true },
          { value: 5, text: '5' },
          { value: 10, text: '10' },
          { value: 20, text: '20' },
          { value: 30, text: '30' }
        ]
      }
    },
    methods: {
      pageChanged() {
        this.$emit('page-changed', this.currentPage)
      },
      amountCharacters() {
        this.$emit('amount-characters', this.selected)
      }
    }
  }
</script>