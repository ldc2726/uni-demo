import config from '@/http/config';
import mockApi from '@/http/mock'

let num = 0;
export const $request =  function(url,data,header,type='post'){
	console.log(process.env.NODE_ENV,url,mockApi)
	let urls = config.test + url
	if(process.env.NODE_ENV !== 'development'){
		urls = config.master + url
	}
	return new Promise((resolve, reject)=>{
		if(mockApi[url]){
			resCode(mockApi[url],resolve, reject)
			return;
		}
		num++;
		if(num==1){
			uni.showLoading({
				title: '加载中',
				mask:true
			});
		}
		uni.request({
			url: urls,
			data:data,
			method:type,
			header:{
				'Content-Type': 'application/json',
				...header
			},
			success: (res) => {
				num--;
				if(num==0){
					uni.hideLoading();
				}
				const data = res.data
				resCode(data,resolve, reject)
			},
			error: (err) => {
				num--;
				if(num==0){
					uni.hideLoading();
				}
				reject(err)
			}
		})
	})
}

/**

 * @param {*} data 传输的返回的数据处理
 */
function resCode(data,resolve, reject){
	switch(data.Code){
		case 200:
			resolve(data);
			break;
		default:
			reject(data)
			uni.showToast({
				title:data.Message,
				position:'bottom',
				icon:'none',
				duration:2000
			})
			break;
	}
}