import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// const tokenKey = 'toutiao_token'
export default new Vuex.Store({
  state: {
    user: '111'
  },
  getters: {},
  mutations: {
    getToken(state, user) {
    }
  },
  actions: {},
  modules: {}
})
