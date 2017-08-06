/* 
 * @Author: 问天
 * @Date:   2017-06-26 16:10:02
 * @Last Modified by:   just success
 * @Last Modified time: 2017-07-29 14:43:25
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	userInfo: null, //用户信息
	geohash: 'wtw3sm0q087', //地址geohash值
	login: true, //是否登录
	imgPath: null, //头像地址
	latitude: '', // 当前位置纬度
	usreId:'WX12345678',
	goodnum:3,
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})