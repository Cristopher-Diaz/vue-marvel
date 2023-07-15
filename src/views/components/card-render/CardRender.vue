<template>
  <div>
    <!-- <div v-for="data in cardData" :key="data.id"> -->
      <div class="row">
      <!-- <b-card-group > -->
        <b-card v-for="data in cardData" :key="data.id"
          :title="data.name"
          :img-src="data.thumbnail.path+'.'+data.thumbnail.extension"
          img-alt="Imagen super héroe"
          img-top
          center
          tag="article"
          class="my-custom-card text-center"
          :class="orderClass">
            <b-card-text class="text-center">
              {{ data.description ? data.description : emptyInfo }}
            </b-card-text>
            <b-button variant="warning" class="mx-auto d-block" @click="returnCardData(data)">Conocer más</b-button>
        </b-card>
      <!-- </b-card-group> -->
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'CardRender',
  /**
   * El componente recibira una 'props'
   * 1) cardData: Corresponde a un array con la data a mostrar
   * 2) orderCards: Corresponde a un número que indicara la cantidad de card por "fila"
   */
  props: {
    cardData: {
      type: Array
    },
    orderCards: {
      type: Number
    }
  },
  data() {
    return {
      emptyInfo: "Informacion no disponible",
      orderClass: 'col-md-6'
    }
  },
  mounted () {
    console.log(this.orderCards)
    if (this.orderCards === 1) this.orderClass = 'col-md-12'
    else if (this.orderCards === 2) this.orderClass = 'col-md-6'
    else if (this.orderCards === 3) this.orderClass = 'col-md-4'
    else this.orderClass = 'col-md-6'
  },
  /**
 *     orderCards = 3
    cada card ----- col-md-4
    orderCards = 2
    cada card ----- col-md-6
    orderCards = 1
    cada card ----- col-md-12
   */
  methods: {
    /**
     * Funcion que devuelve un evento (emit) hacia el componente padre
     * @param { Obj } cardData Corresponde a la data de la card seleccionada
     */
    returnCardData(cardData) {
      this.$emit('sendData', cardData)
    }
  }
}
</script>

<style scoped>
/* .my-custom-card {
  max-width: 20rem;
  border-radius: 200rem;
} */
img {
  width: 300px;
  height: 300px;
}
</style>
