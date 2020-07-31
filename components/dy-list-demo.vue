<template>
	<view>
		这只是一个测试组件,接受父值：
		{{num}}
		<button @click="emit">子父传值</button>
	</view>
</template>

<script>
	export default {
		props:{
			num:{
				require:false
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			emit(){
				this.$emit('change','wwwwww')
			}
		}
	}
</script>

<style>

</style>
