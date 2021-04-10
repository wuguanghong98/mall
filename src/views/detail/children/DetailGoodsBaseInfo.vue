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
        <span>{{shopInfo.name}}</span>
      </div>
      <div class="shop-info-content">
        <div class="detail-sell">
          <div class="detail-sell-div">
            <p class="detail-sell-div-num">{{getTotalSell}}</p>
            <p class="detail-sell-div-des">总销量</p>
          </div>
          <div>
            <p class="detail-sell-div-num">{{shopInfo.cGoods}}</p>
            <p class="detail-sell-div-des">全部宝贝</p>
          </div>
        </div>
        <div class="shop-info-grade">
            <div v-for="(score, index) in shopInfo.scores"
                 :key="index" class="shop-info-score">
              <span class="shop-info-score-name">{{score.name}}</span>
              <span v-if="score.isBetter" class="score-high">
                <span class="shop-info-score-score ">{{score.score}}</span>
                  <span style="background-color: #f13e3a; color: white">高</span>
                </span>
              <span v-else class="score-low">
                <span class="shop-info-score-score">{{score.score}}</span>
                  <span style="background-color: #5ea732; color: white">低</span>
              </span>
            </div>
        </div>
      </div>
    </div>
    <div class="shop-info-detail">进店逛逛</div>
    <div class="under-line"></div>

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
    },
    computed:{
      getTotalSell(){
        return (this.shopInfo.cSells/10000).toFixed(1) + '万'
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
    border: solid 1px rgba(1,1,1,.2);
  }
  .shop-info-title {
    height: 54px;
    line-height: 54px;
  }
  .shop-info-title span {
    position: relative;
    bottom: 22px;
    left: 10px;
  }
  .shop-info-content {
    padding-top: 20px;
    display: flex;
  }
  .detail-sell {
    display: flex;
    border-right: 1px solid rgba(100,100,100,.1);
    width: calc(50%);
    /*padding: 20px;*/
    padding-right: 20px;
    margin-top: 10px;
    padding-bottom: 20px;
    height: 60px;
  }
  .detail-sell-div {
    flex: 1;
    text-align: center;
  }
  .detail-sell-div-num {
    /*font-weight: bold;*/
    font-size: 20px;
    padding: 10px;
  }
  .detail-sell-div-des {
    font-size: 13px;
  }
  .shop-info-grade {
    flex: 1;
    padding-left: 20px;
    font-size: 14px;
  }
  .shop-info-score {
    padding-bottom: 15px;
  }
  .shop-info-score-name {
    padding-right: 10px;
  }
  .shop-info-score-score {
    display: inline-block;
    width: 40px;
  }
  .score-high {
    color: #f13e3a;;
  }
  .score-low {
    color: #5ea732;
  }
  .shop-info-detail {
    background-color: #f2f5f8;
    text-align: center;
    padding: 8px 40px;
    width: 150px;
    transform: translate(70%);
    border-radius: 12px;
  }
  .under-line {
    padding-top: 25px;
    border-bottom: 5px solid #f2f5f8;
  }
</style>
