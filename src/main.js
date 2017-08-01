// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import './style/common.css'

import {
	Button,
	Pagination,
	Tabs,
	TabPane,
	InputNumber,
	Dialog,
	Form,
	FormItem,
	Input 
} from 'element-ui'


Vue.use(Button);
Vue.use(Pagination);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(InputNumber);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.config.productionTip = false

Vue.directive('title', {
	inserted: function(el, binding) {
		document.title = binding.value
	}
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})