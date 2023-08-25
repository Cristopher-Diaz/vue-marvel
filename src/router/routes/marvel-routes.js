export default [
  // vista HOME
  {
    path: '/',
    name: 'HomeView',
    label: 'Home',
    show_in_nav: true,
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
    show_in_nav: true,
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
    show_in_nav: true,
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
    show_in_nav: true,
    icon: {
      icon: 'emoji-expressionless-fill',
      variant: 'ligth'
    },
    component: () => import('@/views/modules/characters/CharactersView.vue')
  },
  {
    path: '/character/:id',
    nombre : 'Vista de caracteres' ,
    etiqueta : 'Personaje' ,
    show_in_nav : falso ,
    componente : () =>  importar ( '@/views/modules/characters/CharacterView.vue' )
  },
  // Sección Cómics
  {
    ruta : '/cómics' , 
    nombre : 'ComicsView' , 
    etiqueta : 'Cómics' , 
    icono : { 
      icono : 'medio libro' , 
      variante : 'luz' 
     },
    componente : () => importar ( '@/views/modules/comics/ComicView.vue' )   
  }
  // Sección búsqueda global
  {
    ruta : '/buscar' , 
    nombre : 'BuscarVista' , 
    show_in_nav : falso , 
    componente : () => importar ( '@/views/modules/global-search/SearchView.vue' )   
  },
  // Sección spinner de carga
  {
    ruta : '/spinner' , 
    nombre : 'SpinnerView' , 
    show_in_nav : falso , 
    componente : () => importar ( '@/views/modules/spinner/SpinnerView.vue' )  
  }
]