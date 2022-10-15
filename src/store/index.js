import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: []
  },
  mutations: {
    storetoken(state, usertoken) {
      state.token = usertoken
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
