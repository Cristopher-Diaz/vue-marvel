<template>
  <div>
    <h1 class="my-4">Table Render</h1>
    <div class="border rounded p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="m-0">Comics correspondientes a Marvel</p>
        <b-button variant="info">Ver más</b-button>
      </div>
      <div>
        <!-- <b-table-simple responsive variant="light">
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
            <b-tr class="text-muted" v-for="(row, index) in rows" :key="index">
              <b-td>{{ row.age }}</b-td>
              <b-td>{{ row.first_name }}</b-td>
              <b-td>{{ row.last_name }}</b-td>
              <b-td>{{ row.first_name }}</b-td>
              <b-td>{{ row.last_name }}</b-td>
              <b-td><b-badge pill variant="primary">{{row.state}}</b-badge></b-td>
              <b-td>
                <b-button variant="success"><b-icon icon="arrow-up"></b-icon></b-button>
                <b-button variant="danger"><b-icon icon="exclamation-triangle"></b-icon></b-button>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple> -->
        <b-table :items="rows">
          <template v-if="actions">
            <template>
              <b-button variant="success"><b-icon icon="arrow-up"></b-icon></b-button>
              <b-button variant="danger"><b-icon icon="exclamation-triangle"></b-icon></b-button>
            </template>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      required: true
    },
    actions: {
      type: Boolean
    }
  }
};
</script>

<style>
</style>