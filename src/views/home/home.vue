<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="tabclick" ref="tabcontrol1"
      v-show="isTabFixed">
    </tab-control>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadmore">
      <home-swiper :banners="banners" @swiperloadimage="swiperloadimage" />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabclick" ref="tabcontrol2" :class="{ fixed: isTabFixed }"
        v-show="!isTabFixed">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'     //...导入navbar组件
import TabControl from '@/components/content/tabcontrol/tabcontrol'
import GoodsList from '@/components/content/goods/goodslist' //商品模块
import scroll from '@/components/common/scroll/scroll'
import BackTop from '@/components/content/backtop/BackTop'
import { debounce } from '@/common/utils'

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
    scroll,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,

  },
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      currenttype: 'pop',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      isshow: false,
      TabControlOffSet: 0,
      isTabFixed: false,
      saveY: 0         //设置变量保存离开页面时候的位置
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currenttype].list
    }
  },
  //activeted函数状态下滚动到离开时的位置，并刷新refresh
  activeted() {
    if (this.$refs.scroll) {
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    }

  },
  // deactivated函数记录离开时的位置
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    // console.log('1')
  },
  created() {
    this.getHomeMultidata()        //---调用方法，请求HomeMultidata数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  destroyed() {
    console.log('destroyed')
  },
  mounted() {
    // 1.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500)

    this.$bus.$on('itemImageLoad', () => {
      // console.log('---------');
      refresh()
    })
  },
  methods: {

    //---------其他方法
    tabclick(index) {
      switch (index) {
        case 0:
          this.currenttype = 'pop'
          break
        case 1:
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
          break
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    backtopclick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    contentScroll(position) {
      // console.log(position)
      // （1）----监听滚动到1000时显示返回tabbar
      this.isshow = -position.y > 1000
      // (2)------监听滚动到大于tabbar顶部时修改样式为fixed
      this.isTabFixed = (-position.y) > this.TabControlOffSet
    },
    loadmore() {
      console.log('加载更多')
      this.getHomeGoods(this.currenttype)
      this.$refs.scroll.finishPullUp()
    },
    swiperloadimage() {
      return this.TabControlOffSet = this.$refs.tabcontrol2.$el.offsetTop
      console.log(TabControlOffSet)
    },
    // -------网络请求的方法-----------//
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
        // console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      })
    }
  }

}

</script>
<style scoped>
.home {
  /* padding-top: 44px; */
  height: 100vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

/* 吸顶效果 */
/* .tab-control {
  position: sticky;
  top: 44px;
  /* z-index: 9; */

/* } */
.content {
  height: calc(100% - 49px);
  overflow: hidden;
}

.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;

}

.tab-control {
  position: relative;
  /* top: 44px; */
}
</style>