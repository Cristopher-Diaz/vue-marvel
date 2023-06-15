<template>
  <b-container>
    <table-render></table-render>
    <card-render :characters="marvelData"></card-render>
  </b-container>
</template>

<script>
import CharactersService from "./modules/characters/characters.service";
import CardRender from "./components/card-render/CardRender.vue";
export default {
  name: 'AboutView',
  components: {
    CardRender

  },
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
        this.marvelData = resp.data.data.results;
      });
  }
};
</script>