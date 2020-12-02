<script>
export default {
	onLaunch: function() {
		this.$store.dispatch('user/getUser')
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
