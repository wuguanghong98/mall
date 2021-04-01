import axios from 'axios'

//配置axios
export function request(config){
  //创建拦截实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 1000
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  })

  //响应拦截器
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  })

  return instance(config)
}
