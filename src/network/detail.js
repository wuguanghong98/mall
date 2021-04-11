import {request} from './request'

export function getGoodsInfo(iid){
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = [columns[0],columns[1]]
    this.lastColumns = services[services.length-1].name
    this.services = services
  }
}

export class shopInfo {
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.scores = shopInfo.score
  }
}

export class cartGoodsInfo {
  constructor(res) {
    this.iid = res.iid
    let data = res.result
    this.desc = data.detailInfo.desc
    this.price = data.itemInfo.highNowPrice
    this.image = data.itemInfo.topImages[0]
    this.number = 1
  }
}
