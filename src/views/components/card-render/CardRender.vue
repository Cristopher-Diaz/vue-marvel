<template>
  <div>
    <div v-for="character in characters" :key="character.id">
      <h1>Card Render</h1>
      <b-card
        :title="character.name"
        :img-src="character.thumbnail.path+'.'+character.thumbnail.extension"
        img-alt="Imagen super héroe"
        img-top
        tag="article"
        class="mb-2 my-custom-card"
      >
        <b-card-text class="text-center">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </b-card-text>
        <b-button variant="warning" class="mx-auto d-block">Conocer más</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardRender',
  props: {
    characters: {
      type: Array,
    }
  }
};
</script>

<style scoped>
.my-custom-card {
  max-width: 20rem;
  border-radius: 200rem;
}
</style>
