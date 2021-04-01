<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tabBar{
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    height: 49px;
  }
</style>
