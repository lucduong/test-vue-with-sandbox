import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello";
import LucDuong from "../components/LucDuong";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      component: LucDuong
    }
  ]
});
