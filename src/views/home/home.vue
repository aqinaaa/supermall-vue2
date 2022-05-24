<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
    <ul>
      <li>你好</li>
      <li>你好</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'     //...导入navbar组件
import TabControl from '@/components/content/tabcontrol/tabcontrol'
import GoodsList from '@/components/content/goods/goodslist' //商品模块

import HomeSwiper from './childComps/HomeSwiper'               //..导入home 页面轮播图组件
import RecommendView from './childComps/Recommendview'         //..导入recommend推荐模块组件
import FeatureView from './childComps/fetureview.vue'          //..导入feature本周推荐模块组件
import { getHomeMultidata, getHomeGoods } from '@/network/home'              //..从网络封装中导入home的数据请求组件


export default {
  name: 'home',
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    RecommendView,
    FeatureView,

  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      }
    }
  },
  created() {
    this.getHomeMultidata()        //---调用方法，请求HomeMultidata数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // getHomeGoods('')
    // getHomeGoods('')
  },
  methods: {
    // home组件创建时就发起请求数据，因为函数会垃圾回收，所以赋值指向给result,存放到组件的data数据中
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        // console.log(this.banners)
        this.recommends = res.data.recommend.list;
        // console.log(this.banners)
        // console.log(this.recommends)
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res.data)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }

}

</script>
<style>
.home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;

}
</style>