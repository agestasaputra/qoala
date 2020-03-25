import Vue from "vue";
import Vuex from "vuex";
import landing from "./modules/landing";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    landing
  }
});
