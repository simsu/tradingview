import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    total: 0,
    workers: 0,
    result: 0,
    saved: null,
    snackbar: false,
    text: "",
  },
  mutations: {
    setCount(state, count) {
      state.count = count;
    },
    setTotal(state, total) {
      state.total = total;
    },
    setWorkers(state, count) {
      state.workers = count;
    },
    setResult(state, result) {
      state.result = result;
    },
    setSaved(state, saved) {
      state.saved = saved;
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
    setTotal({ commit }, total) {
      commit("setTotal", total);
    },
    setWorkers({ commit }, count) {
      commit("setWorkers", count);
    },
    setResult({ commit }, result) {
      commit("setResult", result);
    },
    setSaved({ commit }, saved) {
      commit("setSaved", saved);
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
