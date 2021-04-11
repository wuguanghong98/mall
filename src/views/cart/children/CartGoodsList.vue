<template>
  <div class="CartGoodsList">
    <cart-goods-item v-for="(cart, index) in cartList" :cart="cart"/>
  </div>
</template>

<script>

  import CartGoodsItem from 'components/content/CartGoodsItem'
  export default {
    name: "CartGoodsList",
    components: {
      CartGoodsItem
    },
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      // console.log(this.cartList);
    }

  }
</script>

<style scoped>
  .CartGoodsList {
    padding-top: 49px;
  }
</style>
