import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
const originalGo = VueRouter.prototype.go;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  store.commit("setISBACK", false);
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  store.commit("setISBACK", false);
  return originalReplace.call(this, location).catch((err) => err);
};
VueRouter.prototype.go = function go(location) {
  store.commit("setISBACK", true);
  return originalGo.call(this, location);
};
if (window.history && window.history.pushState) {
  history.pushState(null, null, document.URL);
  window.addEventListener("popstate", backstore, false);
}
function backstore() {
  // store.commit('systemSet/popRouterHistiry',-1)
  store.commit("setISBACK", true);
}
let spinRoute = {
  cancal: false,
  show() {
    //加载中显示loading组件
    store.state.routerLoading = true;
    this.cancal = false;
    // store.state.noJumping = true
  },
  resolve(resolve) {
    //加载完成隐藏loading组件
    return (component) => {
      setTimeout(() => {
        // store.state.noJumping = false
        if (this.cancal) {
          resolve();
        } else {
          store.state.routerLoading = false;
          resolve(component);
        }
      }, 20);
    };
  },
  changecancal() {
    this.cancal = true;
  },
};

function cancalRouter() {
  spinRoute.changecancal();
}
const routes = [
  {
    path: "/",
    redirect: "start",
  },
  {
    path: "/start",
    name: "Start",
    component: () => import("../views/Start/start.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: (resolve) => {
      spinRoute.show(); //加载时开启loading

      require(["../views/Home/index.vue"], spinRoute.resolve(resolve)); //路由懒加载
    },
  },
];

const router = new VueRouter({
  routes,
});
// 全局导航守卫
router.beforeEach((to, from, next) => {
  next();
});
export { cancalRouter, router };
