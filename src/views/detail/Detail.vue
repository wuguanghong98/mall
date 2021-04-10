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
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>

      </ul>
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
