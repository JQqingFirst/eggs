import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Vcx from '@/components/Vcx'
// import User from '@/components/User'

const Hello = resolve => require(['../components/Hello.vue'], resolve)
const Vcx = resolve => require(['../components/Vcx.vue'], resolve)
const User = resolve => require(['../components/User.vue'], resolve)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vcx',
      name: 'Vcx',
      component: Vcx
    },
    {
      path: '/user/:userId/password/:password',
      name: 'user',
      component: User
    }
  ]
})
