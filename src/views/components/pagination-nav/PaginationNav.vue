<template>
  <div>
    <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        aria-controls="my-table"
        last-number
        size="lg"
      ></b-pagination>
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
      }
    },
    data() {
      return {
        currentPage: 1
      }
    }
  }
</script>