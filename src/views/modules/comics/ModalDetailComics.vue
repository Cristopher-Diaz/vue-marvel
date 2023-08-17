<template>
  <b-modal id="modal-detail" title="BootstrapVue" button-size="sm" hide-footer> 
    <p class="my-2">This modal has small footer buttons</p>
    
    {{ marvelDetail }}
  </b-modal>
</template>

<script>
export default {
    props: ['marvelDetail']
};
</script>

<style>
</style>