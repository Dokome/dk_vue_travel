import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import App from "./App";
import router from "./router";
import fastClick from "fastclick";
import store from "./store";
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";
import "styles/iconfont.js";

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
