/**
 *合并object对象，新增相同key值报错
 *
 * @export
 * @returns
 */
export function mergeObject() {
    const data = Array.prototype.splice.call(arguments, 0)
    return merges(data)
}

function merges(data) {
    for (let i = 1; i < data.length; i++) {
        for (const j in data[i]) {
            if (Object.prototype.hasOwnProperty.call(data[0],j)) {
                console.error('接口重名：' + j,'&&&&','涉及接口：==>' + data[i][j].url,data[0][j].url)
            } else {
                data[0][j] = data[i][j]
            }
        }
    }
    return data[0];
}

/**
 * 
 * @param {*} key url 接口
 * @param {*} data 传输的数据
 */
export const getApi = function(key,data = {}) {
    return import('@/http/api').then((res) => {
        return res.default[key](data);
    })
}
