<template>
  <div class="detail">
    <detail-nav-bar/>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :topImg="topImg"/>
      <detail-goods-base-info
        :goodsBaseInfo="goodsBaseInfo"
        :shopInfo="shopInfo"/>
      <detail-goods-desc :desc="desc"/>
      <detail-goods-effect :shopInfoEffect="shopInfoEffect" @goodsEffectImgLoad="goodsEffectImgLoad"/>
    </scroll>
    iid:{{$route.query.iid}}
  </div>
</template>

<script>
  import DetailNavBar from './children/DetailNavBar'
  import DetailSwiper from './children/DetailSwiper'
  import DetailGoodsBaseInfo from './children/DetailGoodsBaseInfo'
  import DetailGoodsDesc from './children/DetailGoodsDesc'
  import DetailGoodsEffect from './children/DetailGoodsEffect'

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
      DetailGoodsDesc,
      DetailGoodsEffect,
      Scroll
    },
    data() {
      return {
        topImg: null,
        goodsBaseInfo: {},
        shopInfo: {},
        desc: null,
        shopInfoEffect: {}
      }
    },
    created(){
      getGoodsInfo(this.$route.query.iid).then(res => {
        console.log(res);
        const data = res.result
        this.topImg = data.itemInfo.topImages

        this.goodsBaseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new shopInfo(data.shopInfo)
        this.desc = data.itemInfo.desc
        this.shopInfoEffect = data.detailInfo.detailImage[0]
      })
    },
    methods: {
      goodsEffectImgLoad() {
        this.$refs.scroll.refresh()
      }

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
