/* eslint no-param-reassign: "error" */

import Vue from 'vue';
import Vuex from 'vuex';
import PersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    PersistedState(),
  ],
  state: {
    token: null,
  },
  mutations: {
    updateToken: (state, token) => {
      state.token = token;
    },
  },
  actions: {
    updateToken({ commit }, token) {
      commit('updateToken', token);
    },
  },
});
