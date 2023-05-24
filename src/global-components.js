// global-components.js
import Vue from 'vue'
import CardRender from '@/views/components/card-render/CardRender.vue'
import TableRender from '@/views/components/table-render/TableRender.vue'
import BarraLateral from "./views/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "./views/components/SidebarPlugin/SidebarLink.vue";

Vue.component('card-render', CardRender)
Vue.component('table-render', TableRender)
Vue.component('SidebarComponent', BarraLateral) // Cambio de nombre a SidebarComponent
Vue.component('SidebarLink', SidebarLink)
