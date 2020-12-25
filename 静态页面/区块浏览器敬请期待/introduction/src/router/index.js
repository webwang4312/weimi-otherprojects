import Vue from "vue";
import VueRouter from "vue-router";
import Registered from "../views/Registered.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Registered",
    component: Registered
  }
];
const router = new VueRouter({
  routes
});

export default router;
