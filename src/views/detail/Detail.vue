<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" :NBCurrentIndex="NBCurrentIndex"/>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :topImg="topImg"/>
      <detail-goods-base-info
        :goodsBaseInfo="goodsBaseInfo"
        :shopInfo="shopInfo"/>
      <detail-goods-desc :desc="desc"/>
      <detail-goods-effect
        :shopInfoEffect="shopInfoEffect"
        @goodsEffectImgLoad="goodsEffectImgLoad"
        @effectImgLoadEnd="effectImgLoadEnd"/>
      <detail-goods-param ref="param" :tableParams="tableParams" :paramInfoSet="paramInfoSet"/>
      <detail-goods-rate ref="rate" :user="user" :rateInfo="rateInfo"/>
      <detail-recommend ref="recommend"/>
    </scroll>
    <detail-tabbar @addCart="addCart"/>

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
  import DetailTabbar from './children/DetailTabbar'

  import Scroll from 'components/common/bscroll/Scroll'

  import * as type from 'store/mutations_type.js'

  import {debounce} from "common/utils";

  import {getGoodsInfo,
          GoodsBaseInfo,
          shopInfo,
          cartGoodsInfo}
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
      DetailTabbar,
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
        rateInfo: {},
        titlePosition: [0,-1000,-2000,-3000],
        NBCurrentIndex: 0,
        cartGoodsInfo: {}
      }
    },
    methods: {
      //穿着效果展示部分图片加载完成后，刷新scroll的可滚动区域
      goodsEffectImgLoad() {
        console.log('effect refresh1')
        this.refresh()
      },
      //穿着效果部分图片加载完之后获得offsetTop
      effectImgLoadEnd() {
        // console.log(this.$refs.param.$el.offsetTop);
        this.titlePosition[1] = -this.$refs.param.$el.offsetTop
        this.titlePosition[2] = -(this.$refs.rate.$el.offsetTop - 44)
        this.titlePosition[3] = -(this.$refs.recommend.$el.offsetTop - 44)
      },
      //点击标签部分，跳到相应的部分
      titleClick(index) {
        this.$refs.scroll.scrollTo(0,this.titlePosition[index])
      },
      //将商品添加到购物车
      addCart() {
        this.$store.dispatch(type.ADD_CART,this.cartGoodsInfo).then(res => {
          this.$toast.show(res)
        }).catch(err => {
          this.$toast.show(err)
        })
      },
      //刷新scroll的可滚动高度
      refresh() {
        console.log('refresh方法中进行刷新');
        this.$refs.scroll.refresh()
      }
    },
    created(){
      //获得详情中商品所相关的信息
      getGoodsInfo(this.$route.query.iid).then(res => {
        // console.log(res);
        //获得详情所构建的购物车数据
        this.cartGoodsInfo = new cartGoodsInfo(res)
        // console.log(this.cartGoodsInfo);
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

      //监听推荐图片加载事件，进行防抖操作
      this.$bus.$on('goodsImgLoad', debounce(() => {
        console.log('detail debounce');
        this.refresh()
      },100))
    },
    mounted() {
      this.$refs.scroll.on('scroll',position => {
        for(let i in this.titlePosition){
          if(position.y <= this.titlePosition[i]){
            // console.log(i);
            this.NBCurrentIndex = Number.parseInt(i)
          }
        }
        // console.log(this.NBCurrentIndex);
      })
    }

  }
</script>

<style scoped>
  .detail {
    height: 100vh;
  }
 .scroll {
   height: calc(100% - 49px - 5px);
   position: relative;
   z-index: 10;
   overflow: hidden;
   background-color: #FFF;
 }
</style>
