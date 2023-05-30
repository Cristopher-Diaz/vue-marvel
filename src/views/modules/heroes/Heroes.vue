<template>
  <div>heroes</div>
</template>

<script>
import HeroesService from "./heroes.service";
export default {
  data() {
    return {
      heroesService: new HeroesService(this),
    };
  },
  methods: {},
  mounted() {
    console.log(this.heroesService);
  },
};
</script>

<style>
</style>