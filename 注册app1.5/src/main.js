import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.config.productionTip = false;
import i18n from "./i18n";
import { Picker } from 'vant';
import { Loading } from 'vant';

Vue.use(Loading);

Vue.use(Picker);



axios.defaults.timeout = 30000; // 请求超时
// axios.defaults.baseURL = "http://106.14.125.210:8003"; // 线上环境
// axios.defaults.baseURL = 'http://192.168.1.60:8080';  // 测试环境
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.baseURL = "http://192.168.1.212:8003"; // 本地环境 // api 即上面 vue.config.js 中配置的地址
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "./network/utils/axios-api";
Vue.prototype.$http = axios;
Vue.prototype.$getRequest = getRequest;
Vue.prototype.$postRequest = postRequest;
Vue.prototype.$putRequest = putRequest;
Vue.prototype.$deleteRequest = deleteRequest;

// import {
//   Form,
//   FormItem,
//   Input,
//   Button,
//   Select,
//   Option,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Table,
//   TableColumn,
// } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Input);
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use( Dropdown);
// Vue.use( DropdownMenu);
// Vue.use( DropdownItem);
// Vue.use(Table);
// Vue.use(TableColumn);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

import 'lib-flexible/flexible';

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
