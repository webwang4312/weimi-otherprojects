import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Ceshi from "../views/Ceshi.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },//重定向,指向了home组件
  {
    path: "/home", component: Home,
    children: [
      { path: "/", component: About },
      { path: "/home/ceshi", component: Ceshi }
    ]
  },
  {
    path: "/about", component: About,

  }


];

const router = new VueRouter({
  routes
});

export default router;
