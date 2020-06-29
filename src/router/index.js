import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import 'font-awesome/css/font-awesome.css'
import { Button, Dialog, Form, FormItem, Input, Message } from 'element-ui'
import User from '../components/User.vue'

Vue.use(Router)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

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
