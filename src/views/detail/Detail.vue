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
      <detail-goods-param :tableParams="tableParams" :paramInfoSet="paramInfoSet"/>
      <detail-goods-rate :user="user" :rateInfo="rateInfo"/>
      <detail-recommend/>
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
  import DetailGoodsParam from './children/DetailGoodsParam'
  import DetailGoodsRate from './children/DetailGoodsRate'
  import DetailRecommend from './children/DetailRecommend'

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
      DetailGoodsParam,
      DetailGoodsRate,
      DetailRecommend,
      Scroll
    },
    data() {
      return {
        topImg: null,
        goodsBaseInfo: {},
        shopInfo: {},
        desc: null,
        shopInfoEffect: {},
        tableParams: [],
        paramInfoSet: [],
        user: {},
        rateInfo: {}
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
        this.tableParams = data.itemParams.rule.tables[0]
        this.paramInfoSet = data.itemParams.info.set
        this.user = data.rate.list[0].user
        this.rateInfo = data.rate.list[0]
      })

      this.$bus.$on('goodsImgLoad', () => {
        this.$refs.scroll.refresh()
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
