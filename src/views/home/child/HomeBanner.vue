<template>
  <div id="Banner">
    <div v-for="banner in banners">{{banner.title}}</div>
  </div>
</template>

<script>

  import * as req from 'network/requestMethods'
  export default {
    name: "HomeBanner",
    data(){
      return {
        banners: null,
      }
    },
    created() {
      //获得数据，并赋值到data中
      req.getMultiData().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>
