// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/global.min.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// 配置请求的根路径
axios.defaults.baseURL = '/api/'
axios.defaults.withCredentials = true // 允许跨域设置，不然可能因为拿不到cookie而报错
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
