<template>
  <div>
    <div class="mb-3" v-if="showSelect">
      <b-form-select v-model="selected" :options="options" @input="amountCharacters"></b-form-select>
    </div>
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
  </div>
</template>

<script>
  export default {
    props: {
      totalRows: {
        type: Number
      },
      perPage: {
        type: Number
      },
      showSelect: {
        type: Boolean
      }
    },
    data() {
      return {
        currentPage: 1,
        selected: null,
        options: [
          { value: null, text: 'Elige la cantidad de personajes a visualizar por página', disabled: true },
          { value: 5, text: '5' },
          { value: 10, text: '10' },
          { value: 25, text: '25' }
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