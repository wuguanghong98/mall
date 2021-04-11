<template>
  <div>
    <nav-bar>
      <div slot="center" class="nav-bar-content">购物车(0)</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "CartNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>
