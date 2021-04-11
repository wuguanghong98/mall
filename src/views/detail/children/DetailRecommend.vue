<template>
  <div class="detail-recommend" v-if="Object.keys(recommends).length != 0">
    <div class="content">
      <div>热门推荐</div>
    </div>
    <div class="commend-imgs">
      <goods-list-item v-for="(goods, index) in recommends"
                       :key="index"
                       :goods="goods"
                       class="commend-img"/>
    </div>
  </div>
</template>

<script>
  import { getGoodsListInfo } from 'network/requestMethods'

  import GoodsListItem from 'components/content/GoodsListItem'
  export default {
    name: "DetailRecommend",
    components: {
      GoodsListItem
    },
    data() {
      return {
        recommends: []
      }
    },
    created() {
      getGoodsListInfo('sell',1).then(res => {
        this.recommends = res.data.list
      })
    }
  }
</script>

<style scoped>
  .detail-recommend {
    padding-top: 20px;
  }
  .content {
    color: #333;
    margin-left: 20px;
  }
  .commend-imgs {
    /*display: flex;*/
    padding-top: 12px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*justify-items: center;*/
  }

</style>
