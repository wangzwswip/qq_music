import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playState: false,
    voiceNumber: 1
  },

  mutations: {
    songPlay (state) {
      // 变更播放状态码
      state.playState = true
    },
    songPause (state) {
      state.playState = false
    },
    voiceSet (state, value) {
      // 设置声音的值
      state.voiceNumber = value
    }
  },

  actions: {},

  getters: {}
})
