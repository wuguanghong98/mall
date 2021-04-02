<template>
  <div>
    <home-nav-bar/>
    <home-banner :banners="banners"></home-banner>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <home-tab-control @tabControlClick="tabControlClick"/>
    <home-goods-list :goodsList="goods[currentType].list"/>

  </div>

</template>

<script>
  import HomeNavBar from './child/HomeNavBar'
  import HomeBanner from './child/HomeBanner'
  import HomeRecommend from './child/HomeRecommend'
  import HomeFeature from './child/HomeFeature'
  import HomeTabControl from './child/HomeTabControl'
  import HomeGoodsList from './child/HomeGoodsList'


  import * as req from 'network/requestMethods'

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeBanner,
      HomeRecommend,
      HomeFeature,
      HomeTabControl,
      HomeGoodsList
    },
    data(){
      return {
        banners: null,
        recommends: null,
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currentIndex: 0
      }
    },
    computed: {
      currentType(){
        switch (this.currentIndex){
          case 0 :
            return 'pop'
          case 1 :
            return 'new'
          case 2 :
            return 'sell'
        }
      }
    },
    created() {
      this.getMultiData()
      // 获取商品列表数据
      this.getGoodsListInfo('pop')
      this.getGoodsListInfo('new')
      this.getGoodsListInfo('sell')
    },
    methods: {

      /**
       * 事件
       */
      tabControlClick(index){
        this.currentIndex = index
      },

      /**
       * 网络请求
       */
      getMultiData(){
        //获得数据，并赋值到data中
        req.getMultiData().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        }).catch(err => {
          console.log(err);
        })
      },
      getGoodsListInfo(type){
        const page = this.goods[type].page + 1
        req.getGoodsListInfo(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page = page
          console.log(this.goods[type].list);
        })
      }

    }
  }
</script>

<style scoped>

</style>
