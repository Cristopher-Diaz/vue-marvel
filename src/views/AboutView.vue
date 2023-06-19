<template>
  <b-container>
    <table-render :rows="items" :fields="fields"></table-render>
    <card-render></card-render>
  </b-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      // Arreglo a iterar en la tabla
      fields: [
        'first_name',
        'last_name',
        'age',
        {key: 'actions'}
        ],
      items:  [
        { age: 40, last_name: 'Dickerson', first_name: 'Macdonald' },
        { age: 21, last_name: 'Larsen', first_name: 'Shaw' },
        { age: 89, last_name: 'Geneva', first_name: 'Wilson' },
        { age: 38, last_name: 'Jami', first_name: 'Carney' }
      ]
    }
  }
}
</script>