/* 
* @Author: 问天
* @Date:   2017-06-26 16:10:02
* @Last Modified by:   问天
* @Last Modified time: 2017-06-26 16:22:07
*/

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'


Vue.use(Vuex)

const state = {
	userInfo: null, //用户信息
	geohash: 'wtw3sm0q087',//地址geohash值
	login: true,//是否登录
	imgPath:null,//头像地址
}

export default new Vuex.Store({
	state,
	getters
})