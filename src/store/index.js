import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    current: 0,
    results: [],
    total: 0,
    snackbar: false,
    text: "",
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    setCurrent(state, current) {
      state.current = current;
    },
    setResults(state, results) {
      state.results = results;
    },
    setTotal(state, total) {
      state.total = total;
    },
    setSnackbar(state, snackbar) {
      state.snackbar = snackbar;
    },
    setText(state, text) {
      state.text = text;
    },
  },
  actions: {
    setCount({ commit }, count) {
      commit("setCount", count);
    },
    setCurrent({ commit }, current) {
      commit("setCurrent", current);
    },
    setResults({ commit }, results) {
      commit("setResults", results);
    },
    setTotal({ commit }, total) {
      commit("setTotal", total);
    },
    setSnackbar({ commit }, snackbar) {
      commit("setSnackbar", snackbar);
    },
    setMessage({ commit }, message) {
      commit("setSnackbar", true);
      commit("setText", message);
    },
    delMessage({ commit }) {
      commit("setSnackbar", false);
      commit("setText", "");
    },
  },
  modules: {},
});
