import Vue from 'vue'
import VueRouter from 'vue-router'
import marvelRoutes from './routes/marvel-routes'

Vue.use(VueRouter)

const routes = [
  ...marvelRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router