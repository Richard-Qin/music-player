import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "./http/http";
import * as $api from "./http/api";

Vue.config.productionTip = false;
/* 网络请求接口 */
Vue.prototype.$api = $api;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
