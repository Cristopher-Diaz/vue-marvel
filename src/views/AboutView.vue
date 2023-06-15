<template>
  <b-container>
    <table-render :rows="items" :actions="showActions"></table-render>
    <card-render></card-render>
  </b-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      // Arreglo a iterar en la tabla
      items:  [
        { id: 1, name: 'John Doe', age: 30, classifications: 'Si' },
        { id: 2, name: 'Jane Smith', age: 25, classifications: 'No' },
        { id: 3, name: 'Bob Johnson', age: 40, classifications: 'Nose' }
      ],
      showActions: true
    }
  }
}
</script>