import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import 'font-awesome/css/font-awesome.min.css'
import { Button, Dialog, Form, FormItem, Input } from 'element-ui'
import User from '../components/User.vue'
// import HappyScroll from 'vue-happy-scroll'
// import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.use(Router)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// Vue.use(HappyScroll)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
