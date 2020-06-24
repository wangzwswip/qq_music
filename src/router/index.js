import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import 'font-awesome/css/font-awesome.min.css'
import { Button } from 'element-ui'
import User from '../components/User.vue'

Vue.use(Router)
Vue.use(Button)

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
