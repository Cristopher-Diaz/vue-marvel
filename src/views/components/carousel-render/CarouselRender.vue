<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#000000"
      img-width="300px"
      img-height="300px"
      style="text-shadow: 1px 1px 2px #333;"
      class="carousel"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide v-for="data in creatorData" :key="data.id" caption="Blank Image" :img-src="data.thumbnail.path+'.'+data.thumbnail.extension" img-alt="Blank image">
        <p>{{data.firstname}}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name:'CarouselRender',
  props:{
    creatorData: {
      type: Array
    }
  },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style>
.carousel{
  margin:1rem;
  height: 50vh;
  width: auto;
}
.img-fluid{
  height: 50vh;
  width: 200px;
}
</style>