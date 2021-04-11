<template>
  <div>
    <cart-nav-bar/>
    <cart-goods-list/>
  </div>
</template>

<script>
  import CartNavBar from './children/CartNavBar'
  import CartGoodsList from './children/CartGoodsList'
  export default {
    name: "cart",
    components: {
      CartNavBar,
      CartGoodsList
    }
  }
</script>

<style scoped>

</style>
