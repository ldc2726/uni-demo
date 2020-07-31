<template>
	<view class="content">
		两秒之后看到的这个页面？没错吧! 自己去路由守卫里面改
		<button type="default" @click="$Router.push('/pages/router1/router1')">去router1页面</button>
		<u-button @click="getApis">请求数据</u-button>
		<u-button @click="getApis2">自定义mock数据</u-button>
		<u-button @click="share">分享</u-button>
		<!-- 组件传值 -->
		<view class="btn" @click="tap">点击我传给子组件{{num}}</view>
		<dy-list-demo :num="num" @change="changeChild"></dy-list-demo>
		<!-- 加密 -->
		加密依赖：{{cropy}}
	</view>
</template>

<script>
	import DyListDemo from '@/components/dy-list-demo.vue'
	import cj from '@/node_modules/crypto-js/crypto-js.js'
export default {
	data() {
		return {
			cropy:'',
			num:0
		};
	},
	onLoad() {},
	methods: {
		tap(){
			this.num++; 
			console.log(cj,JSON.stringify({a:1}))
			this.cropy = cj.HmacMD5('aaaa','123').toString()
		},
		changeChild(e){
			console.log(e)
			uni.showToast({
				title:e,
				position:'bottom',
				icon:'none',
				duration:2000
			})
		},
		getApis(){
			console.log('请求了')
			this.$api('StationList').then(res=>{
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
			
		},
		getApis2(){
			console.log(this.$store,'9999')
			// 输出结果
			this.$api('QueryAccountListData').then(res=>{
				console.log(res)
				uni.showToast({
					title:res.Data.article,
					position:'bottom',
					icon:'none',
					duration:2000
				})
			})
		},
		share(){
			uni.share({
			    provider: "weixin",
			    scene: "WXSceneSession",
			    type: 1,
			    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
		},
		
	},
	components:{
		DyListDemo
	}
};
</script>

<style lang="scss">
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}

.btn{
	width: 750rpx;
	height: 40px;
	color: #fff;
	line-height: 40px;
	background: red;
	text-align: center;
}
</style>
