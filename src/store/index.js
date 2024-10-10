import Vue from "vue";
import Vuex from "vuex";
import Home from "./Home";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routerLoading: false,
    ISBACK: false,
    apiLoading: 0,
  },
  getters: {},
  mutations: {
    setISBACK(state, value) {
      state.ISBACK = value;
    },
    setRouterLoading(state, value) {
      state.routerLoading = value;
    },
    setApiLoading(state, value) {
      state.apiLoading = state.apiLoading + value;
    },
  },
  actions: {},
  modules: {
    Home,
  },
});
