// 这里使用{}而不是直接使用request的原因是因为request文件中直接export ，没有使用default
import { request } from "./request";
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
// 获取首页商品数据
export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}