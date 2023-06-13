<template>
  <b-container>
    <table-render :rows="items"></table-render>
    <card-render></card-render>
  </b-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      // Arreglo a iterar en la tabla
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald", state: true },
        { age: 21, first_name: "Larsen", last_name: "Shaw", state: false },
        { age: 89, first_name: "Geneva", last_name: "Wilson", state: true },
        { age: 38, first_name: "Jami", last_name: "Carney", state: false },
      ]
    }
  }
}
</script>