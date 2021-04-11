<template>
  <div class="goods-rate-div" v-if="Object.keys(user).length != 0">
    <div class="content">
      <div class="rate-title">
        用户评价
        <div class="rate-title-more">
          更多 >
        </div>
      </div>
      <div class="rate-content">
        <div class="user-info">
          <img :src="user.avatar" alt="">
          <div class="user-info-name">{{user.uname}}</div>
        </div>
        <div class="rate-info">
          <span style="line-height: 23px;">{{rateInfo.content}}</span>
        </div>
        <div class="created-info">
            {{rateInfo.created | Time}}
          <span class="info-style">{{rateInfo.style}}</span>
        </div>
        <div class="rate-img" v-if="rateInfo.images">
          <div v-for="(img, index) in rateInfo.images" :key="index">
            <img :src="img" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {formatTime} from 'common/utils'

  export default {
    name: "DetailGoodsRate",
    props: {
      user: {
        type: Object,
        default() {
          return {}
        }
      },
      rateInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      Time(value) {
        return formatTime(value * 1000, "Y-M-D h:m:s")
      }
    }
  }
</script>

<style scoped>
  .goods-rate-div {
    padding-bottom: 25px;
    border-bottom: 5px solid #f2f5f8;
  }
  .content {
    padding-top: 15px;
    margin-left: 20px;
    width: calc(100% - 40px);
  }
  .rate-title {
    line-height: 50px;
    border-bottom: 1px solid rgba(1,1,1,.1);
    font-size: 15px;
  }
  .rate-title-more {
    float: right;
    font-size: 13px;
  }
  .user-info {
    padding-top: 15px;
    display: flex;
    /*float: left;*/
    /*line-height: 42px;*/
  }
  .user-info img{
    border-radius: 21px;
    width: 42px;
    height: 42px;
  }
  .user-info-name {
    height: 42px;
    line-height: 42px;
    padding-left: 10px;
    color: #333;
  }
  .rate-info {
    padding-top: 10px;
    font-size: 15px;
    color: #777;
    /*line*/
  }
  .created-info {
    padding-top: 10px;
    font-size: 13px;
    color: #999;
  }
  .info-style {
    padding-left: 10px;
  }
  .rate-img {
    padding-top: 15px;
    display: flex;
  }
  .rate-img img {
    width: 78px;
    height: 78px;
  }
</style>
