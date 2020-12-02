import Vue from 'vue'
let user = {
    namespaced: true,
    state: {
		userData: null,
		token:"",
		phoneData: {
			app_type: '',
			client: '' // android | 2, ios | 1, 其他 | 0
		}
    },
    mutations: {
		
    },
    actions: {
		//登陆，保存token
		setUser(state,data){
			console.log('执行了')
			state.token = data;
			uni.setStorage({
				key: 'token',
				data: data,
				success: function () {
					Vue.prototype.$Router.pushTab('/pages/tabbar/tabbar-1/tabbar-1')
				}
			});
			// uni.setStorageSync('token', data)
		},
		getUser(state){
			uni.getStorage({
				key: 'token',
				success: function (res) {
					state.token = res.data
				},
				fail: function(err){
					Vue.prototype.$Router.replaceAll('/pages/login/index')
				}
			});
		}
	}
}
export default user