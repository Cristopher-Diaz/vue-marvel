<template>
  <div>
    <div v-for="data in cardData" :key="data.id">
      <h1>Card Render</h1>
      <b-card
        :title="data.name"
        :img-src="data.thumbnail.path+'.'+data.thumbnail.extension"
        img-alt="Imagen super héroe"
        img-top
        tag="article"
        class="mb-2 my-custom-card"
      >
        <b-card-text class="text-center">
          {{ data.description ? data.description : emptyInfo}}
        </b-card-text>
        <b-button variant="warning" class="mx-auto d-block" @click="characterInfo(data.id)">Conocer más</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardRender',
  props: {
    cardData: {
      type: Array,
    },
    typeInfo: {
      type: String
    }
  },
  data() {
    return {
      emptyInfo: "Informacion no disponible"
    }
  },
  methods: {
    characterInfo(id) {
      // Aquí puedes utilizar la ID como desees
      console.log("Aqui esta:", id);
    }
  }
}
</script>

<style scoped>
.my-custom-card {
  max-width: 20rem;
  border-radius: 200rem;
}
</style>
