<template>
  <div class="cart-goods-item">
    <div class="cart-item-left" @click="changeChecked">
      <div class="tick-div" v-if="cart.isSelect">
        <img src="~assets/img/cart/tick.svg" alt="" >
      </div>
      <div class="un-select-tick-div" v-else></div>
    </div>
    <div class="cart-goods-img">
      <img :src="cart.image" alt="">
    </div>
    <div class="cart-item-right">
      <div class="title">{{cart.title}}</div>
      <div class="desc">{{cart.desc}}</div>
      <div class="right-bottom">
        <div class="price">￥{{cart.price}}</div>
        <div class="number">x{{cart.number}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as type from 'store/mutations_type'
  export default {
    name: "CartGoodsItem",
    props: {
      cart: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      changeChecked() {
        this.$store.commit(type.CHANGE_CART_CHECKED,this.cart.iid)
      }
    }
  }
</script>

<style scoped>
  .cart-goods-item {
    display: flex;
    padding: 7px 5px;
    border-bottom: solid 1px rgba(0, 0, 0, .2);
  }
  .cart-item-left {
    width: 30px;
  }
  .tick-div {
    background-color: #ff8198;
    width: 19px;
    border-radius: 9px;
    height: 19px;
    text-align: center;
    transform: translate(22%, 210%);
  }
  .un-select-tick-div {
    border: 2px solid #ff8198;
    width: 19px;
    border-radius: 9px;
    height: 19px;
    text-align: center;
    transform: translate(22%, 210%);
  }
  .cart-goods-img img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }
  .cart-item-right{
    padding-top: 3px;
    padding-left: 10px;
    flex: 1;
  }
  .cart-item-right> div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title{
    width: 220px;
    color: #333333;
    font-size: 17px;
  }
  .desc{
    padding-top: 18px;
    width: 230px;
    color: #666666;
    font-size: 14px;
  }
  .right-bottom {
    font-size: 17px;
    display: flex;
    padding-top: 24px;
  }
  .price {
    color: #FF4500;
    width: 207px;
  }
  .number {
    font-size: 16px;
    color: #333333;
  }
</style>
