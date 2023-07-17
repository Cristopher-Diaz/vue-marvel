<template>
  <div>
      <div class="row">
        <b-card v-for="data in cardData" :key="data.id"
          v-show="loadingCard"
          :title="data.name"
          :img-src="data.thumbnail.path+'.'+data.thumbnail.extension"
          img-alt="Imagen super héroe"
          img-top
          center
          tag="article"
          class="my-custom-card text-center align-items-center"
          :class="orderClass">
            <b-card-text class="text-center">
              {{ data.description ? data.description : emptyInfo }}
            </b-card-text>
            <b-button variant="warning" class="mx-auto d-block" @click="returnCardData(data)">Conocer más</b-button>
        </b-card>
        <!-- loading DIV -->
        <div v-show="!loadingCard" class="row">
          <b-card no-body img-top class="col-md-12 mb-3">
            <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
            <b-card-body>
              <div>
                <span> Cargando información... <b-spinner label="Spinning"></b-spinner> </span>
              </div>
              <b-skeleton width="100%"></b-skeleton>
            </b-card-body>
          </b-card>
          <b-card no-body img-top class="col-md-12">
            <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
            <b-card-body>
              <div>
                <span> Cargando información... <b-spinner label="Spinning"></b-spinner> </span>
              </div>
              <b-skeleton width="100%"></b-skeleton>
            </b-card-body>
          </b-card>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CardRender',
  /**
   * El componente recibira una 'props'
   * 1) cardData: Corresponde a un array con la data a mostrar
   * 2) orderCards: Corresponde a un número que indicara la cantidad de card por "fila"
   * 3) loadingCard: Valor de tipo Boolean, activa o desactiva el "loading"
   */
  props: {
    cardData: {
      type: Array
    },
    orderCards: {
      type: Number
    },
    loadingCard: {
      type: Boolean
    }
  },
  data() {
    return {
      emptyInfo: "Informacion no disponible",
      orderClass: 'col-md-6'
    }
  },
  mounted () {
    if (this.orderCards === 1) this.orderClass = 'col-md-12'
    else if (this.orderCards === 2) this.orderClass = 'col-md-6'
    else if (this.orderCards === 3) this.orderClass = 'col-md-4'
    else this.orderClass = 'col-md-6'
  },
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
