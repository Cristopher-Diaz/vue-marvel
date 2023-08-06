export default [
  // vista HOME
  {
    path: '/',
    name: 'HomeView',
    label: 'Home',
    icon: {
      icon: 'house-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/HomeView.vue')
  },
  // Vista Abaut
  {
    path: '/about',
    name: 'AboutView',
    label: 'About',
    // icon: {
    //   icon: 'book-fill',
    //   variant: 'ligth'
    // },
    component: () => import('@/views/AboutView.vue')
  },
  // Sección Eventos
  {
    path: '/events',
    name: 'EventsView',
    label: 'Eventos',
    icon: {
      icon: 'calendar-event-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/modules/events/EventsView.vue')
  },
  // Sección Personajes
  {
    path: '/characters',
    name: 'CharactersView',
    label: 'Personajes',
    icon: {
      icon: 'emoji-expressionless-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/modules/characters/CharactersView.vue')
  },
  {
    path: '/character/:id',
    name: 'CharacterView',
    label: 'Personaje',
    component: () => import('@/views/modules/characters/CharacterView.vue')
  }
]