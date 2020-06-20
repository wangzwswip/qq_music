import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import 'font-awesome/css/font-awesome.min.css'
import { Button } from 'element-ui'

Vue.use(Router)
Vue.use(Button)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
