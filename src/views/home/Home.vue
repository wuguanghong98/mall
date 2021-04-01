<template>
  <div>
    <home-nav-bar/>
    <home-banner :banners="banners"></home-banner>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>

</template>

<script>
  import HomeNavBar from './child/HomeNavBar'
  import HomeBanner from './child/HomeBanner'
  import HomeRecommend from './child/HomeRecommend'

  import * as req from 'network/requestMethods'

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeBanner,
      HomeRecommend
    },
    data(){
      return {
        banners: null,
        recommends: null,
      }
    },
    created() {
      //获得数据，并赋值到data中
      req.getMultiData().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>
