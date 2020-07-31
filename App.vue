<script>
export default {
	onLaunch: function() {
		
		uni.getStorageInfo({
			success:  (res)=> {
				if(!res.keys.includes('_tokens')){
					this.$Router.replaceAll('/pages/login/index')
				}
			}
		});
		// setTimeout(() => {
		// 	uni.setTabBarBadge({
		// 		index: 1,
		// 		text: '31'
		// 	});
		// 	uni.showTabBarRedDot({
		// 		index: 3
		// 	});
		// }, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */ 
@import "uview-ui/index.scss";
</style>
