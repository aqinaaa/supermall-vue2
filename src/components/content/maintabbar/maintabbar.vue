<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <img slot='item-icon' src="@/assets/img/tabbar/home.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/home_active.svg" alt="">
      <p slot='item-text'>首页</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot='item-icon' src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/profile_active.svg" alt="">
      <p slot='item-text'>我的</p>
    </tab-bar-item>
    <tab-bar-item path="catagory">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot='item-icon-active' src="@/assets/img/tabbar/category_active.svg" alt="">
      <p slot="item-text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="cart">
      <img slot="item-icon" src="../../../assets/img/tabbar/cart.svg" alt="">
      <img slot='item-icon-active' src="../../../assets/img/tabbar/cart_active.svg" alt="">
      <p slot="item-text">购物车</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/tabbar'
import TabBarItem from '@/components/common/tabbar/tabbaritem.vue'
export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>