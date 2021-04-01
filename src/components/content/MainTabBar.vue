<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" textColor="blue">
        <img slot="tabBarItemImage" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="tabBarItemImageActive" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="tabBarItemText">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" textColor="blue">
        <img slot="tabBarItemImage" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="tabBarItemImageActive" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="tabBarItemText">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" textColor="blue">
        <img slot="tabBarItemImage" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="tabBarItemImageActive" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="tabBarItemText">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" textColor="blue">
        <img slot="tabBarItemImage" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="tabBarItemImageActive" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="tabBarItemText">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
