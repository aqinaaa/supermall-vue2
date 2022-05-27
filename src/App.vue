<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

import mainTabBar from './components/content/maintabbar/maintabbar.vue'

export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>

<style >
/* 此处导入初始化样式，asstes中 */
@import './assets/css/base.css'
</style>
