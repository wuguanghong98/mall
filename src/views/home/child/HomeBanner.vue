<template>
  <div id="Banner">
    <swiper>
      <swiper-item v-for="banner in banners">
            <img :src="banner.image" alt="" @load="bannerImgLoad">
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
    },
    data(){
      return {
        emitNum: 0
      }
    },
    methods:{
      bannerImgLoad(){
        if(this.emitNum == 0){
        this.$emit('bannerImgLoad')
        this.emitNum++
        }
      }
    }
  }
</script>

<style scoped>

</style>
