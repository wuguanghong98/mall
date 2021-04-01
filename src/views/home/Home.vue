<template>
  <div>
    <home-nav-bar/>
    <home-banner></home-banner>
  </div>

</template>

<script>
  import HomeNavBar from './child/HomeNavBar'
  import HomeBanner from './child/HomeBanner'
  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeBanner
    }
  }
</script>

<style scoped>

</style>
