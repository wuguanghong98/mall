<template>
  <div class="tabBarItem" @click="tabBarItemClick">
    <div v-if="isActive">
      <slot name="tabBarItemImage"></slot>
    </div>
    <div v-else>
      <slot name="tabBarItemImageActive"></slot>
    </div>
    <!--<div :class="{text: !isActive}">-->
      <!--<slot name="tabBarItemText"></slot>-->
    <!--</div>-->
    <div :style="fullColor">
      <slot name="tabBarItemText"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) == -1
      },
      fullColor(){
        if(this.$route.path == this.path)
        return {color: this.textColor}
      }
    },
    props: {
      path: String,
      textColor: {
        type:String,
        default: 'red'
      }
    },
    methods: {
      tabBarItemClick(){
        // console.log(this.path);
        if(this.$route.path != this.path)
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tabBarItem{
    width: 100%;
    align-items: center;
    text-align: center;
    font-size: 14px ;
  }
  .tabBarItem img{
    width: 24px;
    height: 24px;
  }
  .text{
    color: red;
  }
</style>
