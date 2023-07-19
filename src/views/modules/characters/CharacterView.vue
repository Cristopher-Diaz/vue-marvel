<template>
  <div v-if="character">
    <div class="bg-secondary">
      <b-container>
        <div class="text-center">
            <h1 class="py-4">{{ character.name }}</h1>
            <b-img
                class="my-4"
                :src="character.thumbnail.path + '.' + character.thumbnail.extension"
                thumbnail
                fluid
                rounded="circle"
                alt="Character"
                style="max-width: 30rem"
            >
            </b-img>
        </div>
        <div class="pt-4">
            <div class="pb-3">
                <h3 class="text-left mb-3">Series relacionadas</h3>
                <ul>
                    <li v-for="(serie, index) in character.series.items" :key="index" class="mb-2">
                        {{serie.name}}
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="text-left mb-3">Historias relacionadas</h3>
                <ul class="pb-0">
                    <li v-for="(history, index) in character.stories.items" :key="index" class="mb-2">
                        {{history.name}}
                    </li>
                </ul>
            </div>
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
        .then(res => {
            console.log(res.data.data.results[0])
            this.character = res.data.data.results[0]
        })
    },
  },
  mounted() {
    this.getCharacter();
  },
};
</script>

<style>
</style>