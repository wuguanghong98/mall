<template>
  <div class="goods-desc">
    <div class="before">
      <div class="before-content"></div>
    </div>
    <div class="desc-content">{{desc}}</div>
    <div class="after">
      <div class="after-content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsDesc",
    props: {
      desc: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style scoped>
  .goods-desc {
    padding-top: 20px;
  }
  .before {
    border-bottom: solid 1px black;
    width: 110px;
    margin-left: 20px;
  }
  .before-content {
    background-color: black;
    width: 5px;
    height: 5px;
    margin-bottom: -1px;
  }
  .desc-content {
    padding: 14px 20px;
  }
  .after {
    border-bottom: solid 1px black;
    width: 110px;
    float: right;
    position: relative;
    top: -5px;
    right: 20px;
  }
  .after-content {
    background-color: black;
    width: 5px;
    height: 5px;
    float: right;
  }
</style>
