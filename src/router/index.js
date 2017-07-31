import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Vcx from '@/components/Vcx'
// import User from '@/components/User'

const Hello = resolve => require(['../components/Hello.vue'], resolve)
const Vcx = resolve => require(['../components/Vcx.vue'], resolve)
const User = resolve => require(['../components/User.vue'], resolve)
const Mycoop = resolve => require(['../components/mycoop/Mycoop.vue'], resolve) //我的鸡笼
const Goldchange = resolve => require(['../components/goldchange/Goldchange.vue'], resolve) //金币对换
const Address = resolve => require(['../components/address/Address.vue'], resolve) //金币对换


Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/vcx',
    name: 'Vcx',
    component: Vcx
  }, {
    path: '/user/:userId/password/:password',
    name: 'user',
    component: User
  }, {
    path: '/mycoop',
    name: 'mycoop',
    component: Mycoop
  }, {
    path: '/goldchange',
    name: 'goldchange',
    component: Goldchange
  }, {
    path: '/address',
    name: 'address',
    component: Address
  }]
})