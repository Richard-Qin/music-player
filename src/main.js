import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "./http/http";
import $api from "@/http/api";
import "./assets/style/index.scss";
import * as $transformer from "@/utils/transformer.js";
import directives from "./directives/index";
import filters from "./filters/index";

Vue.use(directives);
Vue.use(filters);
Vue.config.productionTip = false;
/* 网络请求接口 */
Vue.prototype.$api = $api;
Vue.prototype.$transformer = $transformer;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
