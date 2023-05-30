<template>
  <div>
    <h1>Listado de heroes</h1>
    <div v-for="character in marvelData" :key="character.id">
      <span> Nombre del tipo: {{character.name}} </span>
      <img :src="character.thumbnail.path+'.'+character.thumbnail.extension" >
    </div>
  </div>
</template>

<script>
import CharactersService from "./characters.service";
export default {
  name: 'CharactersView',
  data() {
    return {
      charactersService: new CharactersService(this),
      marvelData: []
    };
  },
  methods: {},
  mounted() {
    console.log(this.charactersService);
    this.charactersService.callService('getCharacters')
      .then(resp => {
        this.marvelData = resp.data.data.results
      })
  }
};
</script>

<style>
</style>