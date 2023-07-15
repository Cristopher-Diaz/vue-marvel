<template>
  <b-container>
    <table-render></table-render>
    <card-render :cardData="marvelData" :orderCards="3" @sendData="getCardData"></card-render>
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
      marvelData: [],
      typeInfo: "Personaje"
    };
  },
  methods: {
    getCardData (cardData) {
      console.log(cardData)
    }
  },
  mounted() {
    console.log(this.charactersService);
    this.charactersService.callService('getCharacters')
      .then(resp => {
        this.marvelData = resp.data.data.results;
      });
  }
};
</script>