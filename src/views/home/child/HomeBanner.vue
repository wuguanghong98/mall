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

  export default {
    name: "HomeBanner",
    props:{
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  #Banner{
    padding-top: 44px;
  }
</style>
