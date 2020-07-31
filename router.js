import Vue from 'vue'
import Router, {
	RouterMount
} from 'uni-simple-router';

Vue.use(Router)

const whitelist = { //声明了一个白名单
	'/pages/tabbar/tabbar-1/tabbar-1': 'tabbar-1',
	'/pages/tabbar/tabbar-2/tabbar-2': 'tabbar-2',
	'/pages/tabbar/tabbar-3/tabbar-3': 'tabbar-3',
	'/pages/tabbar/tabbar-4/tabbar-4': 'tabbar-4',
	'/pages/tabbar/tabbar-5/tabbar-5': 'tabbar-5',
}

//初始化
const router = new Router({
	routes: ROUTES.concat([{
		path: '*',
		name: 'moddle',
		redirect: to => {
			console.log(to)
			const name = whitelist[to.path];
			if (name) {
				return {
					name
				}
			};
			// return {
			// 	name: '404'
			// }
		}
	}])
});
let count = 0;

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to, from,'XXXXXXXXX')
	next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log(to, from,'afterEach----守卫')
})

export {
	RouterMount,
	router
}
