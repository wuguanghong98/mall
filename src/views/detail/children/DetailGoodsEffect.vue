<template>
  <div class="shop-info-effect" v-if="Object.keys(shopInfoEffect).length != 0">
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
    data() {
      return{
        effectImgNumber: 0
      }
    },
    props: {
      shopInfoEffect: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    updated() {
      // console.log(this.shopInfoEffect.list.length);
      this.effectImgNumber = this.shopInfoEffect.list.length
    },
    methods: {
      goodsEffectImgLoad(){
        this.$emit('goodsEffectImgLoad')
        this.effectImgNumber -= 1
        if(this.effectImgNumber == 0)this.imgLoad()
      },
      imgLoad() {
        this.$emit('effectImgLoadEnd')
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
