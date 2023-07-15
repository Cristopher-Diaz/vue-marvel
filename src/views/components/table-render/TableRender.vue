<template>
  <div>
    <h1 class="my-4">Table Render</h1>
    <div class="border rounded p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="m-0">Comics correspondientes a Marvel</p>
        <b-button variant="info">Ver más</b-button>
      </div>
      <div>
        <b-table-simple responsive variant="light">
          <b-thead>
            <b-tr class="text-black-50">
              <b-th>Edad</b-th>
              <b-th>Primer nombre</b-th>
              <b-th>Segundo nombre</b-th>
              <b-th>Primer nombre</b-th>
              <b-th>Segundo nombre</b-th>
              <b-th>Estado</b-th>
              <b-th>Acciones</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr class="text-muted" v-for="(item, index) in items" :key="index">
              <b-td>{{ item.age }}</b-td>
              <b-td>{{ item.first_name }}</b-td>
              <b-td>{{ item.last_name }}</b-td>
              <b-td>{{ item.first_name }}</b-td>
              <b-td>{{ item.last_name }}</b-td>
              <b-td><b-badge pill variant="primary">{{item.state}}</b-badge></b-td>
              <b-td>
                <b-button variant="success">Si</b-button>
                <b-button variant="danger">No</b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald", state: true },
        { age: 21, first_name: "Larsen", last_name: "Shaw", state: false },
        { age: 89, first_name: "Geneva", last_name: "Wilson", state: true },
        { age: 38, first_name: "Jami", last_name: "Carney", state: false },
      ],
    };
  },
};
</script>

<style>
</style>