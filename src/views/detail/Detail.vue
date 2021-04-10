<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="scroll">
      <detail-swiper :topImg="topImg"/>
      <detail-goods-base-info
        :goodsBaseInfo="goodsBaseInfo"
        :shopInfo="shopInfo"/>
    </scroll>
    iid:{{$route.query.iid}}
  </div>
</template>

<script>
  import DetailNavBar from './children/DetailNavBar'
  import DetailSwiper from './children/DetailSwiper'
  import DetailGoodsBaseInfo from './children/DetailGoodsBaseInfo'

  import Scroll from 'components/common/bscroll/Scroll'

  import {getGoodsInfo,
          GoodsBaseInfo,
          shopInfo}
          from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailGoodsBaseInfo,
      Scroll
    },
    data() {
      return {
        topImg: null,
        goodsBaseInfo: {},
        shopInfo: {}
      }
    },
    created(){
      getGoodsInfo(this.$route.query.iid).then(res => {
        console.log(res);
        const data = res.result
        this.topImg = data.itemInfo.topImages

        this.goodsBaseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new shopInfo(data.shopInfo)
      })
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
  }
 .scroll {
   height: calc(100%);
   position: relative;
   z-index: 10;
   overflow: hidden;
   background-color: #FFF;
 }
</style>
