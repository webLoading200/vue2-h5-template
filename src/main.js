import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import "@/styles/reset.css";
import "./scss/common.css";
import "amfe-flexible";
// import VueLazyload from "vue-lazyload";
// Vue.use(VueLazyload) //无配置项
// 配置项
// Vue.use(VueLazyload, {
//   preLoad: 1.3, //预加载的宽高比
//   // error: errorimage, //图片加载失败时显示的图片
//   attempt: 1, // 加载错误后最大尝试次数
// });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
