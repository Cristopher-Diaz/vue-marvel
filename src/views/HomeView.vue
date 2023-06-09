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
    <b-container class="bg-light rounded-lg p-4">
      <div>
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
      <b-container class="mt-3">
        <b-row class="align-items-center">
          <b-col lg="4" class="mx-auto p-lg-4 my-lg-0 my-4">
            <div class="card-rotate">
              <div class="front bg-dark"></div>
              <div class="back bg-primary">
                <span class="text-light">
                  <h1>Lorem, ipsum.</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, magnam hic alias molestiae magni, cumque minus
                  voluptate, ducimus quo inventore eius. Impedit provident
                  cumque repudiandae minus, tenetur quaerat unde facere!
                </span>
              </div>
            </div>
          </b-col>
          <b-col lg="6" class="ml-auto">
            <b-row class="justify-content-start">
              <b-col md="6">
                <b-card
                  border-variant="info"
                  header="Primary"
                  class="text-start"
                >
                  <b-card-text class="pr-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col md="6">
                <b-card
                  border-variant="info"
                  header="Secondary"
                  class="text-start"
                >
                  <b-card-text class="pr-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="justify-content-start mt-4">
              <b-col md="6">
                <b-card
                  border-variant="info"
                  header="Primary"
                  class="text-start"
                >
                  <b-card-text class="pr-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col md="6">
                <b-card
                  border-variant="info"
                  header="Secondary"
                  class="text-start"
                >
                  <b-card-text class="pr-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
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

.card-rotate {
  width: 100%;
  height: 350px;
  transform-style: preserve-3d;
  perspective: 900px;
}

.front {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: .5s;
  backface-visibility: hidden;
  box-shadow: 0px 0px 30px #000;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 20px #000;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: .5s;
  border-radius: 5px;
  overflow: hidden;
}

.card-rotate .front:before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.1);
  transform: rotate(45deg);
}

.card-rotate .back:before {
  content: "";
  position: absolute;
  top: 10%;
  left: -65%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.1);
  transform: rotate(45deg);
}

.card-rotate .back span{
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  text-align: center;
}

.card-rotate:hover .front{
  transform: rotateY(180deg);
}

.card-rotate:hover .back{
  transform: rotateY(0);
}
</style>
