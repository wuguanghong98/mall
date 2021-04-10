<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data() {
      return {
        BScroll: null,
      }
    },
    mounted() {
      this.BScroll = new BScroll(this.$refs.wrapper,{
        pullUpLoad: true,
        probeType: 3,
        click: true,
      })
    },
    methods: {
      scrollTo(x,y,time=300){
        this.BScroll && this.BScroll.scrollTo(x,y,time)
      },
      on(type,hook){
        return this.BScroll && this.BScroll.on(type,hook)
      },
      finishPullUp(){
        this.BScroll && this.BScroll.finishPullUp()
      },
      getY(){
        return this.BScroll.y
      },
      refresh() {
        this.BScroll.refresh()
      }
    }

  }
</script>

<style scoped>

</style>
