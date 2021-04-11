import * as type from "./mutations_type";

export default {
  [type.ADD_CART](content,payload) {
    return new Promise((resolve,reject) => {
      let equal = content.state.cartGoodsList.filter(g => {
        return g.iid == payload.iid
      })
      if(equal.length > 0){
      content.commit(type.CART_GOODS_NUMBER_ADD,equal[0].iid)
        resolve('购物车数量加一')
      }else{
        content.commit(type.ADD_CART_GOODS_INFO,payload)
        resolve('加入购物车成功')
      }
      reject('加入购物车失败')
    })

  }
}
