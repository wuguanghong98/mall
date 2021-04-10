<template>
  <div class="detail-swiper-div">
    <swiper class="detail-swiper">
      <swiper-item v-for="(img, index) in topImg" :key="index">
        <img :src="img" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImg: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper-div {
    padding-top: 44px;
  }
  .detail-swiper {
    height: 300px;
  }
</style>
