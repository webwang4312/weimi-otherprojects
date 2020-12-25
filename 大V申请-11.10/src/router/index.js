import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

const routes = [{
    path: '/',
    name: 'index',
    component: () =>
        import("../views/Index.vue"),
    meta: {
        keepAlive: true // 需要被缓存
    }
}]

const router = new VueRouter({
    routes,
});

export default router;