<template>
  <tab-control :titles="['流行','新款','精选']" :currentIndex="currentIn" id="home_tab_control"
               @tabControlClick="tabControlClick"/>
</template>

<script>
  import TabControl from 'components/content/TabControl'
  export default {
    name: "HomeTabControl",
    props: {
      currentIn: {
        type: Number,
        default: 0
      }
    },
    components: {
      TabControl
    },
    methods: {
      tabControlClick(index){
        this.$emit('tabControlClick',index)
      }
    }
  }
</script>

<style scoped>
  #home_tab_control{
    z-index: 9;
    position: sticky;
    top: 44px;
  }
</style>
