import * as type from './mutations_type'

export default {
  [type.ADD_CART_GOODS_INFO](state, payload){
    state.cartGoodsList.push(payload)
  },
  [type.CART_GOODS_NUMBER_ADD](state, payload){
    state.cartGoodsList.forEach(g => {
      if(g.iid == payload) {
        g.number ++
      }
    })
  },
  [type.CHANGE_CART_CHECKED](state, payload) {
    state.cartGoodsList.find(g => {
      if(g.iid == payload)
        g.isSelect = !g.isSelect
    })
  }
}
