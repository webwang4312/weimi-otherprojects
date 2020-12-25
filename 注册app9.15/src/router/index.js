import Vue from "vue";
import VueRouter from "vue-router";
import Download from "../views/Download.vue";
import Registered from "../views/Registered.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Registered",
    component: Registered
  },
  {
    path: "/download",
    name: "Download",
    component: Download
  }
];
const router = new VueRouter({
  routes
});

export default router;
