import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: null
  },
  mutations: {
    login(state, payload) {
      state.name = payload;
    },
    logout(state) {
      state.name = null;
    }
  },
  actions: {},
  modules: {}
});
