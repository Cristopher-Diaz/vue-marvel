<template>
  <div class="bg-dark">
    <div>
      <b-img
        class="hero"
        src="https://wallpaperset.com/w/full/e/6/b/183984.jpg"
        fluid
        alt="hero"
      ></b-img>
    </div>
    <b-container class="bg-light">
      <div class="mt-4">
        <h1>Hola</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius eos
          doloribus amet debitis atque excepturi similique accusamus corrupti
          mollitia illum officiis corporis, quisquam dolor, dolorem impedit
          nemo, consectetur fugit!
        </p>
      </div>
      <div class="mt-4">
        <h4>Left and Right (or Start and End)</h4>
        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-left
          class="mb-3"
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>

        <b-card
          img-src="https://placekitten.com/300/300"
          img-alt="Card image"
          img-right
        >
          <b-card-text>
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.hero {
  width: 100%;
  max-height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  filter: brightness(0.35);
}
</style>
