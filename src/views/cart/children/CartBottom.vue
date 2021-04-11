<template>
  <div class="bottom-div">
    <div class="bottom-left">
      <span class="selectAll" @click="changeSelectAll">
        <img src="~assets/img/cart/tick.svg" alt="">
        <!--<div v-else></div>-->
        <!--<span v-else class="un-select"></span>-->
        <span style="padding-left: 7px"/>
        全选
      </span>
      <span class="total">合计：{{}}</span>
    </div>
    <div class="bottom-right">
      去计算({{}})
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartBottom",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {

    },
    methods: {
      changeSelectAll() {
        const g = this.cartList.find(g => {
          g.isSelect = false
        })
        console.log(g);
        // this.cartList.map(g => {
        //   g.isSelect = false
        // })
      }
    }
  }
</script>

<style scoped>
  .bottom-div {
    position: fixed;
    bottom: 49px;
    display: flex;
    height: 44px;
    width: 100%;
    line-height: 44px;
  }
  .bottom-left {
    background-color: #EEEEEE;
    width: 280px;

  }
  .bottom-right {
    background-color: #ff4500;
    flex: 1;
    width: calc(100% - 280px);
    color: white;
    text-align: center;
  }

  .selectAll {
    font-size: 14px;
    padding-left: 10px;
  }
  .selectAll img {
    background-color: #ff8198;
    border-radius: 8px;
    position: relative;
    top: 2px;
  }
  .un-select {
    border: 2px solid #ff8198;
    /*background-color: ;*/
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 8px;
    position: relative;
    top: 2px;
  }
  .total {
    padding-left: 15px;
    font-size: 17px;
  }
</style>
