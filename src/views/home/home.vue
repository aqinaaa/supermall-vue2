<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <swiper>
        <swiper-item></swiper-item>
      </swiper>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { getHomeMultidata } from '@/network/home'
import { Swiper, SwiperItem } from '@/components/common/swriper'   //导入轮播图模块
export default {
  name: 'home',
  components: {
    NavBar,
    Swiper,
    Swiperitem
  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
    }
  },
  created() {
    // home组件创建时就发起请求数据，因为函数会垃圾回收，所以赋值指向给result,存放到组件的data数据中
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.commends = res.data.recommend.list;
    })
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff
}
</style>