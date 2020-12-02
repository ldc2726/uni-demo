<template>
	<view class="login">
		<view class="login_logo">
			<u-image width="100%" height="100%" :src="src"></u-image>	
		</view>
		<u-form :model="form" ref="uForm">
			<u-form-item label="账号" prop="number">
				<u-input v-model="form.number" />
			</u-form-item>
			<u-form-item label="密码" prop="password">
				<u-input type="password" v-model="form.password" />
			</u-form-item>
		</u-form>
		<u-button class="login_btn" @click="submit">登录</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src:'https://cdn.uviewui.com/uview/example/fade.jpg',
			form: {
				number: '',
				password: '',
			},
			rules: {
				number: [
					{ 
						required: true, 
						message: '请输入手机号',
						trigger: ['change','blur'],
					}
				],
				password: [
					{
						min: 1, 
						max: 20,
						required:true,
						message: '数字、字母 1-20位', 
						trigger: 'change'
					}
				]
			}
		};
	},
	methods: {
		submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过',this.$store);
					this.$store.dispatch('user/setUser','token')
					
				} else {
					uni.showToast({
						title:"验证失败",
						position:'bottom',
						icon:'none',
						duration:2000
					})
				}
			});
		}
	},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		// this.$refs.uForm.setRules(this.rules);
		console.log(this.$u)
	}
};
</script>
<style lang="scss">
	.login{
		box-sizing: border-box;
		padding: 20px 20px 0;
		.login_logo{
			width: 100rpx;
			height: 100rpx;
			margin: 200rpx auto 40rpx;
			border-radius: 50%;
		}
		.login_btn{
			margin-top: 40rpx;
		}
	}
</style>