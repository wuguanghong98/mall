<template>
  <div id="navBar_div" :style="{backgroundColor: backgroundColor,color:color}">
    <div id="navBar">
      <div class="navBar_left"><slot name="left"> </slot></div>
      <div class="navBar_center"><slot name="center"></slot></div>
      <div class="navBar_right"><slot name="right"> </slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      backgroundColor: {
        type: String,
        default: '#ff8198'
      },
      color: {
        type: String,
        default: 'white'
      }
    }
  }
</script>

<style scoped>
  @import "~assets/css/base.css";


  #navBar_div{
    width: 100%;
    position: fixed;
    z-index: 9;
  }

  #navBar{
    /*background-color: var(--color-tint);*/
    height: 44px;
    display: flex;
    line-height: 44px;
    text-align: center;
  }

  .navBar_left,.navBar_right{
    width: 60px;
  }
  .navBar_center{
    /*//使其充满剩余部分*/
    flex: 1px;
    /*color: var(--color-background);*/
  }
</style>
