<template>
  <div class="home">
    <home-nav-bar/>
    <home-tab-control @tabControlClick="tabControlClick"
                      ref="tabControl2"
                      v-show="isShowTabControl2"
                      :currentIn="currentIndex"/>
    <b-scroll class="home_scroll" ref="home_scroll">
      <home-banner :banners="banners" @bannerImgLoad="bannerImgLoad"></home-banner>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <home-tab-control @tabControlClick="tabControlClick"
                        ref="tabControl"
                        :currentIn="currentIndex"/>
      <home-goods-list :goodsList="goods[currentType].list"/>
    </b-scroll>

    <back-top @click.native="backTopClick" v-show="backTopIsShow"/>
  </div>

</template>

<script>
  import HomeNavBar from './child/HomeNavBar'
  import HomeBanner from './child/HomeBanner'
  import HomeRecommend from './child/HomeRecommend'
  import HomeFeature from './child/HomeFeature'
  import HomeTabControl from './child/HomeTabControl'
  import HomeGoodsList from './child/HomeGoodsList'

  import BScroll from 'components/common/bscroll/Scroll'
  import BackTop from 'components/content/BackTop'
  import {debounce} from 'common/utils'

  import * as req from 'network/requestMethods'


  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeBanner,
      HomeRecommend,
      HomeFeature,
      HomeTabControl,
      HomeGoodsList,
      BackTop,
      BScroll
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
        currentIndex: 0,
        backTopIsShow: false,
        currentPosition: 0,
        tabControlPosition: 0,
        isShowTabControl2: false
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
    mounted(){
      // this.$bus.$on('goodsImgLoad',debounce(this.imgLoadRefresh,300))
      this.$bus.$on('goodsImgLoad',this.imgLoadRefresh)
      this.$refs.home_scroll.on('scroll',(option) => {
        if((-option.y) > 1000)
          this.backTopIsShow = true
        else
          this.backTopIsShow = false
          this.isShowTabControl2 = (-option.y) > this.tabControlPosition
      });
      this.$refs.home_scroll.on('pullingUp',() => {
        // console.log('上啦加载跟多');
        this.getGoodsListInfo(this.currentType)
        this.$refs.home_scroll.finishPullUp()
      })


    },
    methods: {
      bannerImgLoad(){
        this.tabControlPosition = this.$refs.tabControl.$el.offsetTop
      },
      imgLoadRefresh(){
        this.$refs.home_scroll.BScroll.refresh()
      },
      /**
       * 事件
       */
      tabControlClick(index){
        this.currentIndex = index
      },
      backTopClick(){
        this.$refs.home_scroll.scrollTo(0,0)
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
          // console.log(type);
          // console.log(this.goods[type].list);
        })
      }

    },
    deactivated(){
      this.currentPosition = this.$refs.home_scroll.getY()
    },
    activated(){
      this.$refs.home_scroll.scrollTo(0, this.currentPosition, 0)
    }
  }
</script>

<style scoped>
  .home{
    overflow-y: hidden;
    /*position: relative;*/
    height: 100vh;
  }
  .home_scroll{
    position: absolute;
    top: 43px;
    bottom: 49px;
  }
</style>
