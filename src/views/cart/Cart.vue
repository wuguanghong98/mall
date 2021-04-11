<template>
  <div>
    <cart-nav-bar :cartListLength="cartListLength"/>
    <cart-goods-list :cartList="cartList"/>
    <cart-bottom :cartList="cartList"/>
  </div>
</template>

<script>
  import CartNavBar from './children/CartNavBar'
  import CartGoodsList from './children/CartGoodsList'
  import CartBottom from './children/CartBottom'
  export default {
    name: "cart",
    components: {
      CartNavBar,
      CartGoodsList,
      CartBottom
    },
    date() {
      return {
        cartList: []
      }
    },
    computed: {
      cartListLength() {
        // console.log(this.cartList.length);
        return this.cartList.length
      }
    },
    created() {
      this.cartList = this.$store.getters.getCartGoodsList
    }
  }
</script>

<style scoped>

</style>
