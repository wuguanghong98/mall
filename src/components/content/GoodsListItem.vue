<template>
  <div class="goods">
    <a :href="goods.link">
    <img :src="goods.show.img" alt="" :key="goods_image" >
      <div class="goods-info">
        <p>{{goods.title}}</p>
        <span class="price">{{goods.price}}</span>
        <span class="collect">{{goods.cfav}}</span>
      </div>
    </a>
  </div>

</template>

<script>
  export default {
    name: "GoodsListItem",
    data() {
      return {
        goods_image: 'goods_image'
      }
    },
    props: {
      goods: Object,
    }
  }
</script>

<style scoped>
  .goods {
    position: relative;
    width: 49%;
    padding: 4px 5px 40px 6px;
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
