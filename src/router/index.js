import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Vcx from '@/components/Vcx'
// import User from '@/components/User'


const Index = resolve => require(['../components/index/Index.vue'], resolve) //首页
const Mycoop = resolve => require(['../components/mycoop/Mycoop.vue'], resolve) //我的鸡笼
const Goldchange = resolve => require(['../components/goldchange/Goldchange.vue'], resolve) //金币对换
const Address = resolve => require(['../components/address/Address.vue'], resolve) //金币对换
const Eggbasket = resolve => require(['../components/eggbasket/Eggbasket.vue'], resolve) //我的蛋筐
const Adopt = resolve => require(['../components/adopt/Adopt.vue'], resolve) //领养
const AdoptPay = resolve => require(['../components/adoptPay/AdoptPay.vue'], resolve) //领养支付
const Success = resolve => require(['../components/adoptPay/Success.vue'], resolve) //支付成功
const Friend = resolve => require(['../components/friend/Friend.vue'], resolve) //朋友榜
const Distribution = resolve => require(['../components/distribution/Distribution.vue'], resolve) //配送
const Getegg = resolve => require(['../components/getegg/Getegg.vue'], resolve) //领蛋
const Error = resolve => require(['../components/error/Error.vue'], resolve) //错误链接


Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/friend_id/:friend_id',
    name: 'Share',
    component: Index
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
  }, {
    path: '/eggbasket',
    name: 'eggbasket',
    component: Eggbasket
  }, {
    path: '/adopt',
    name: 'adopt',
    component: Adopt
  },
  {
    path: '/adoptPay',
    name: 'adoptPay',
    component: AdoptPay
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
  {
    path: '/friend',
    name: 'friend',
    component: Friend
  },
  {
    path: '/distribution',
    name: 'distribution',
    component: Distribution
  },
  {
    path: '/getegg',
    name: 'getegg',
    component: Getegg
  },
  {
    path: '/*',
    name: 'error',
    component: Error
  }

  ]
})