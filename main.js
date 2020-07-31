import Vue from 'vue'
import App from './App'
import {RouterMount} from './router'
import {getApi} from '@/utils/index.js'
import store from './store'
import uView from "uview-ui";
console.log(uView,'pppppppppp')
Vue.use(uView);

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$api = getApi
App.mpType = 'app'

const app = new Vue({
    ...App
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
