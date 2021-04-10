<template>
  <div class="shop-info-effect">
    <div class="shop-info-effect-key">
      {{shopInfoEffect.key}}
    </div>
    <div v-for="(img,index) in shopInfoEffect.list" :key="index">
      <img :src="img" alt="" @load="goodsEffectImgLoad" width="375.2px">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsEffect",
    props: {
      shopInfoEffect: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      goodsEffectImgLoad(){
        this.$emit('goodsEffectImgLoad')
      }
    }
  }
</script>

<style scoped>
  .shop-info-effect {
    padding-top: 25px;

  }
  .shop-info-effect-key {
    margin-left: 20px;
    padding-bottom: 10px;
    color: #222;
  }
</style>
