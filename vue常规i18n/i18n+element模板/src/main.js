import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false;
import { Button,Table,
  TableColumn,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 Vue.use(Button)
 Vue.use(Table)
 Vue.use(TableColumn)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
