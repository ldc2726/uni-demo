// 导入所有接口
import { $request } from '@/http/request'
import { mergeObject } from '@/utils'
import WorkOrderApi from '@/http/api/WorkOrderApi'
import ErpBasicApi from '@/http/api/ErpBasicApi'

export const apiList = mergeObject(WorkOrderApi,ErpBasicApi)

const api = {};
for (const i in apiList) {
    api[i] = (data) => {
        const url = apiList[i].url;
        let type = 'post'; let header = {};
        if (apiList[i].type) {
            type = apiList[i].type
        }
        if (apiList[i].header) {
            header = apiList[i].header
        }
		return $request(url,data,header,type)
    }
}

export default api;

