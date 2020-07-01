import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playState: false
  },

  mutations: {
    songPlay (state) {
      // 变更播放状态码
      state.playState = true
    },
    songPause (state) {
      state.playState = false
    }
  },

  actions: {},

  getters: {}
})
