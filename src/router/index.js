import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/home/home";
import City from "@/pages/city/city";
import Detail from "@/pages/detail/detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});
