// global-components.js
import Vue from 'vue'
import CardRender from '@/views/components/card-render/CardRender.vue'
import TableRender from '@/views/components/table-render/TableRender.vue'
import NavBar from '@/views/components/nav-bar/NavBar.vue'
import PaginationNav from '@/views/components/pagination-nav/PaginationNav.vue'
import SearchInput from '@/views/components/search-input/SearchInput.vue'
import GalleryRender from '@/views/components/gallery-render/GalleryRender.vue'

Vue.component('card-render', CardRender)
Vue.component('table-render', TableRender)
Vue.component('nav-bar', NavBar)
Vue.component('pagination-nav', PaginationNav)
Vue.component('search-input', SearchInput)
Vue.component('gallery-render', GalleryRender)