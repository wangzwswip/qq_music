// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/global.min.css'
import store from '../store'
import Player from '../src/utils/player'
import Progress from '../src/utils/progress'
import Lyric from '../src/utils/lyric'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$Player = Player
Vue.prototype.$Lyric = Lyric
Vue.prototype.$Progress = Progress
// 配置请求的根路径
axios.defaults.baseURL = '/api/'
axios.defaults.withCredentials = true // 允许跨域设置，不然可能因为拿不到cookie而报错
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
