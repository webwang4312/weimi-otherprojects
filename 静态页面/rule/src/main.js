import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
