<template>
  <div id="home_goods_list">
    <goods-list-item v-for="goods in goodsList" :goods="goods"/>
  </div>
</template>

<script>

  import GoodsListItem from 'components/content/GoodsListItem'

  export default {
    name: "HomeGoodsList",
    components: {
      GoodsListItem,
    },
    props: {
      goodsList: {
        type: Array,
        default(){
          return []
        }
      }
    },

  }
</script>

<style scoped>
  #home_goods_list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
  }
</style>
