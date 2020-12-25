import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/home" }, //重定向,指向了home组件
    {
        path: "/home",
        component: Home,

    }


];

const router = new VueRouter({
    routes
});

export default router;