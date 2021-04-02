<template>
  <div>
    <home-nav-bar/>
    <home-banner :banners="banners"></home-banner>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <ul><li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li><li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li><li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li><li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li><li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </div>

</template>

<script>
  import HomeNavBar from './child/HomeNavBar'
  import HomeBanner from './child/HomeBanner'
  import HomeRecommend from './child/HomeRecommend'
  import HomeFeature from './child/HomeFeature'

  import * as req from 'network/requestMethods'

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeBanner,
      HomeRecommend,
      HomeFeature
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
        console.log(res);
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
