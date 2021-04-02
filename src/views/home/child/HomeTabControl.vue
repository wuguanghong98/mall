<template>
  <tab-control :titles="['流行','新款','精选']" id="home_tab_control"></tab-control>
</template>

<script>
  import TabControl from 'components/content/TabControl'
  export default {
    name: "HomeTabControl",
    components: {
      TabControl
    }
  }
</script>

<style scoped>
  #home_tab_control{
    position: sticky;
    top: 44px;
  }
</style>
