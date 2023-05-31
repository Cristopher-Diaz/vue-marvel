<template>
  <div>
    <h1>Table Render</h1>
    <b-table-simple sticky-header responsive bordered head-variant="dark">
      <b-thead head-variant="dark">
        <b-tr>
          <b-th>Edad</b-th>
          <b-th>Primer nombre</b-th>
          <b-th>Segundo nombre</b-th>
          <b-th>Estado</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(item, index) in items" :key="index">
          <b-td>{{item.age}}</b-td>
          <b-td>{{item.first_name}}</b-td>
          <b-td>{{item.last_name}}</b-td>
          <b-td><b-badge pill variant="warning">{{item.state}}</b-badge></b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald', state: true },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw', state: false },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson', state: true },
          { age: 38, first_name: 'Jami', last_name: 'Carney', state: false }
        ]
      }
    }
}
</script>

<style>

</style>