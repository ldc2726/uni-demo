import Mock from '@/node_modules/mockjs/dist/mock-min.js';
const devBaseUrl = 'https://opendemo.diyibox.cn'
import {apiList} from '@/http/api'
import mockApi from './mockApi.js'
const mockApis = {}

for(let i in mockApi){
	mockApis[i] = mockjs(mockApi[i])
}
export default mockApis;
/**
 *mockjs
 *
 * @export
 * @returns
 */
function mockjs(data){
	return Mock.mock(data)
}