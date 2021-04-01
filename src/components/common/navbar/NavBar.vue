<template>
  <div id="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  @import "~assets/css/base.css";


  #navBar{
    background-color: var(--color-tint);
    height: 44px;
    display: flex;
    line-height: 44px;
    text-align: center;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
    color: var(--color-background);
  }
</style>