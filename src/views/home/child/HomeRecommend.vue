<template>
  <div id="recommend">
    <div v-for="recommend in recommends" class="recommend-item">
      <a :href="recommend.link">
        <img :src="recommend.image" alt="">
        <div class="recommend-item-text">{{recommend.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommed",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #recommend{
    display: flex;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: solid #eee 13px;
    font-size: 14px;
  }
  #recommend img{
    height: 80px;
    width: 80px;

  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item-text{
    padding-top: 8px;
  }
</style>
