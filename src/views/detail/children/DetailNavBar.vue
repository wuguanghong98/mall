<template>
  <div class="detail-nav-bar-div">
    <nav-bar :backgroundColor="backgroundColor"
             :color="navBarColor"
             class="navBar">
      <div slot="left" class="left"
           @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail_nav_bar_center">
        <div v-for="(title,index) in titles" class="title"
             @click="titleClick(index)"
             :class="{active : (index == currentIndex)}">{{title}}</div>
      </div>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data(){
      return {
        titles: ['商品','参数','评论','推荐'],
        navBarColor: '#66666',
        backgroundColor: "white",
        currentIndex: 0,
      }
    },
    props: {
      NBCurrentIndex: {
        type: Number,
        default: 0
      }
    },
    watch: {
      NBCurrentIndex() {
        this.currentIndex = this.NBCurrentIndex
      }
    },
    computed: {
      iid(){
        // console.log(this.$route.query);
        return this.$route.query
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index){
        this.currentIndex = index
        this.$emit('titleClick',this.currentIndex)
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar-div{
    position: relative;
    z-index: 11;
  }

  .detail_nav_bar_center{
    display: flex;
  }
  .title{
    flex: 1;
  }
  .navBar{
    font-size: 14px;
  }
  .left img{
    position: relative;
    left: 20px;
    top: 6px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
