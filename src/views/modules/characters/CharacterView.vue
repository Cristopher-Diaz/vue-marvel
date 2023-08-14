<template>
  <div v-if="character">
    <div class="bg-secondary">
      <b-container>
        <div class="text-center">
            <h1 class="py-4">{{ character.name }}</h1>
            <b-img
                class="mb-4"
                :src="character.thumbnail.path + '.' + character.thumbnail.extension"
                thumbnail
                fluid
                rounded="circle"
                alt="Character"
                style="max-width: 30rem"
            >
            </b-img>
        </div>
        <div class="row p-4 bg-dark text-light rounded mb-3">
            <div class="col-6">
                <h3 class="text-left mb-3">Series relacionadas</h3>
                <ul class="pb-0">
                    <li v-for="(serie, index) in character.series.items" :key="index" class="mb-2">
                        {{serie.name}}
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <h3 class="text-left mb-3">Historias relacionadas</h3>
                <ul class="pb-0">
                    <li v-for="(history, index) in character.stories.items" :key="index" class="mb-2">
                        {{history.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-center pb-3">
          <b-button variant="primary"><router-link class="link" to="/characters">Volver a personajes</router-link></b-button>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import CharactersService from "./characters.service";

export default {
  data() {
    return {
      charactersService: new CharactersService(this),
      character: null,
    };
  },
  methods: {
    getCharacter() {
      this.charactersService
        .callService("getCharacter", { character_id: this.$route.params.id })
        .then(res => this.character = res.data.data.results[0])
    },
  },
  mounted() {
    this.getCharacter();
  },
};
</script>

<style scoped>
    .link {
        text-decoration: none;
        color: inherit;
    }
</style>