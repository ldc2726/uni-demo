<template>
	<view class="content">
		页面 - 5
		<u-button @click="exit">退出登陆</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			exit(){
					uni.removeStorage({
					    key: '_tokens',
					    success:  (res)=> {
					        console.log('success');
							this.$Router.replaceAll('/pages/login/index')
					    }
					});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
