import {request} from './request'

//封装各种网络请求的配置
export function getMultiData(){
  return request({
    url: '/home/multidata'
  }).catch(err => {
    alert("网络请求失败")
  })
}

export function getGoodsListInfo(type,page){
  return request({
    url: 'home/data/',
    params: {
      type,
      page
    }
  }).catch(err => {
    alert("网络请求失败")
  })
}
