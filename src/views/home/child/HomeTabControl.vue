<template>
  <tab-control :titles="['流行','新款','精选']" id="home_tab_control"
               @tabControlClick="tabControlClick"/>
</template>

<script>
  import TabControl from 'components/content/TabControl'
  export default {
    name: "HomeTabControl",
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
