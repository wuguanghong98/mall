import {request} from './request'

//封装各种网络请求的配置
export function getMultiData(){
  return request({
    url: '/home/multidata'
  })
}
