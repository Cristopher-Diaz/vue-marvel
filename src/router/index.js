import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/characters',
    name: 'CharactersView',
    component: () => import('../views/modules/characters/CharactersView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router