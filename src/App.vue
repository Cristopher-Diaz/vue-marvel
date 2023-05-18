<template>
  <div id="app">
    <ButtonTimer />
  </div>
</template>

<script>
import Vue from "vue"
import { BootstrapVue } from "bootstrap-vue"
import ButtonTimer from "./components/ButtonTimer"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

export default {
  components: {
    ButtonTimer
  }
}
</script>