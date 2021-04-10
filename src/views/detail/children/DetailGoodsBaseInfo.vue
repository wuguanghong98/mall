<template>
  <div class="detail-goods">
    <div class="goods-title">
      {{goodsBaseInfo.title}}
    </div>
    <div class="goods-price">
      <span>{{goodsBaseInfo.price}}</span>
      <span class="old-prince">{{goodsBaseInfo.oldPrice}}</span>
      <span class="discountDesc" :style="{backgroundColor: goodsBaseInfo.discountBgColor}">{{goodsBaseInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <div class="columns-item"
           v-for="(column,index) in goodsBaseInfo.columns"
           :key="index">{{column}}</div>
      <div class="columns-item-last">{{goodsBaseInfo.lastColumns}}</div>
    </div>
    <div class="services">
      <div v-for="(service, index) in goodsBaseInfo.services"
           v-if="index < goodsBaseInfo.services.length - 1"
           :key="index"
           class="services-item">
        <img :src="service.icon" alt="">
        <span>{{service.name}}</span>
      </div>
    </div>
    <div class="shopInfo">
      <div class="shop-info-title">
        <img :src="shopInfo.shopLogo" alt="">
        {{shopInfo.name}}
      </div>
      <div>
        <div>
          <div>
            <p>{{shopInfo.cSells}}</p>
            <p>总销量</p>
          </div>
          <div>
            <p>{{shopInfo.cGoods}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
        <div>
            <div v-for="(score, index) in shopInfo.scores"
                 :key="index">
              <span>{{score.name}}</span>
              <span>{{score.score}}</span>
              <span v-if="score.isBetter">高</span>
              <span v-else>低</span>
            </div>
        </div>
      </div>
    </div>
    <ul>
      <li>sdfsd1</li>
      <li>sdfsd2</li>
      <li>sdfsd3</li>
      <li>sdfsd4</li>
      <li>sdfsd5</li>
      <li>sdfsd6</li>
      <li>sdfsd7</li>
      <li>sdfsd8</li>
      <li>sdfsd9</li>
      <li>sdfsd10</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsBaseInfo",
    props: {
      goodsBaseInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-goods {
    padding-top: 8px;
    font-size: 16px;
    position: relative;
    margin-left: 4px;
    margin-right: 8px;
  }
  .goods-title {
    color: #222;
  }
  .goods-price {
    padding-top: 10px;
    color: var(--color-high-text);
    font-size: 24px;
  }
  .old-prince {
    text-decoration: line-through;
    padding-left: 3px;
    font-size: 13px;
  }
  .discountDesc {
    color: #ffffff;
    padding: 3px 7px;
    font-size: 13px;
    border-radius: 10px;
    position: relative;
    top: -7px;
    left: 6px;
  }
  .columns {
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 10px;
    display: flex;
    border-bottom: 1px rgba(100,100,100,.1) solid;
  }
  .columns-item {
    flex: 1;
  }
  .columns-item-last {
    margin-left: 0px;
  }
  .services {
    display: flex;
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .services-item {
    flex: 1;
    white-space:nowrap;
  }
  .services-item img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 3px;
  }
  .shopInfo {
    padding-top: 40px;
  }
  .shopInfo img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .shop-info-title {
    /*line-height: 54px;*/
  }
</style>
