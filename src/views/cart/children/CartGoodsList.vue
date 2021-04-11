<template>
  <div class="CartGoodsList">
    <cart-goods-item/>
  </div>
</template>

<script>

  import CartGoodsItem from 'components/content/CartGoodsItem'
  export default {
    name: "CartGoodsList",
    components: {
      CartGoodsItem
    }
  }
</script>

<style scoped>
  .CartGoodsList {
    padding-top: 44px;
  }
</style>
