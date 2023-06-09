import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './assets/_custom.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Global Components
import './global-components'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')