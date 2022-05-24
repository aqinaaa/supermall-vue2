import axios from "axios"
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })
        // 2.响应拦截
        // -----2.1拦截之请求拦截
    instance.interceptors.request.use(config => {
            // console.log(config);
            return config
        }, err => {
            console.log(err);
        })
        // -----2.2 拦截之响应拦截
    instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            console.log(err);
        })
        //3 发送真正的网络请求
    return instance(config)
}


// 最终采用这种最简单的网络请求封装，因为axios本省返回的就是一个promise函数，所以这里return返回一个config即可
// ---------------------------------------------------------