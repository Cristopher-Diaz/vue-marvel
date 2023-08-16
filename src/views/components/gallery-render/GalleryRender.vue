<template>
  <div>
    <div class="gallery-container">
      <!-- seccion que muestra la galeria  -->
      <div class="gallery">
        <img
          v-for="data in galleryData"
          :key="data.id"
          :src="data.thumbnail.path + '.' + data.thumbnail.extension"
          alt="imagen de marvel"
          class="image"
          @click="onSelectGalleryItem(data)"
        />
      </div>
      <div v-if="cardInfo != null">
        <div class="image_content">
          <img
            class="focus_image"
            :src="
              cardInfo.thumbnail.path +
              '.' +
              cardInfo.thumbnail.extension
            "
            alt=""
          />
          <div class="text">
            <h1>{{ cardInfo.title }}</h1>
            <p>{{ cardInfo.date }}</p>
            <p>{{ cardInfo.description ? cardInfo.description : "Este articulo no tiene descripción" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery-render",
   /**
   * El componente recibira una 'props'
   * *galleryData: corresponde a un array con la informacion a mosntrar
   */
  props: {
    galleryData: {
      type: Array,
    },
  },
  data() {
    return {
      cardInfo: null,
    };
  },
  methods: {
    //la siguiente funcion recibe un parametro que va a ser un elemento del array principal
    onSelectGalleryItem(data) {
      this.cardInfo = data;
    },
  },
  // mounted() {
  //   this.onSelectGalleryItem(this.galleryData[0])
  // },
  watch: {
    //sirve para mostrar el primer elemento del array principal
    galleryData(){
      this.onSelectGalleryItem(this.galleryData[0])
    } 
  }
};
</script>

<style>
.gallery-container {
  display: grid;
  gap: 1rem;
  margin: 1rem 0;
}
.gallery {
  padding: 5px;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  border: 5px solid #000000;
  border-radius: 1rem;
}
.image {
  border-radius: 1rem;
  border: 2px solid #000000;
  width: 75px;
  margin: 1rem;
  margin: 0 auto;
  cursor: pointer;
}
.image_content {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  border: 5px solid #000000;
  border-radius: 1rem;
}
.text {
  padding-right: 1rem;
  padding-top: 1rem;
}
.focus_image {
  border-radius: 1rem;
  width: 100%;
}
</style>
