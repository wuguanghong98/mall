<template>
  <div>
    <nav-bar>
      <div slot="center" class="nav-bar-content">购物车({{cartListLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "CartNavBar",
    components: {
      NavBar
    },
    props: {
      cartListLength: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>

</style>
