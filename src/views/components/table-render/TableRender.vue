<template>
  <div>
    <h1 class="my-4">Table Render</h1>
    <div class="border rounded p-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="m-0">Comics correspondientes a Marvel</p>
        <b-button variant="info">Ver más</b-button>
      </div>
      <div>
        <!-- <b-badge pill variant="primary">{{row.state}}</b-badge> -->
        <b-table :items="rows" :fields="fields">
          <template #head(actions)="scope">
            <div class="text-center">{{ scope.label }}</div>
          </template>
          <template #cell(actions)>
            <div class="text-center">
              <b-button variant="success"><b-icon icon="arrow-up"></b-icon></b-button>
              <b-button variant="danger" class="ml-2"><b-icon icon="exclamation-triangle"></b-icon></b-button>
            </div>
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
    fields: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>