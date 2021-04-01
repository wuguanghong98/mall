<template>
  <div id="Banner">
    <swiper>
      <swiper-item v-for="banner in banners">
          <a :href="banner.link">
            <img :src="banner.image" alt="">
          </a>
      </swiper-item>
    </swiper>
    </div>
</template>

<script>

  import {Swiper,SwiperItem} from 'components/common/swiper/index'

  import * as req from 'network/requestMethods'
  export default {
    name: "HomeBanner",
    components: {
      Swiper,
      SwiperItem
    },
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
