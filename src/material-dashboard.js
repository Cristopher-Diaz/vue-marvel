import SideBar from "./components/SidebarPlugin";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import "./assets/scss/material-dashboard.scss";

export default {
  install(Vue) {
    Vue.use(SideBar);
    Vue.use(VueMaterial);
  }
};
