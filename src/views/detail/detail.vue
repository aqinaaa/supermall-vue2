<template>
  <div class="detail">
    <detail-navbar class="detail-navbar"></detail-navbar>
    <scroll class="cotent" ref="scroll" @loadimage="loadimage">
      <detail-swiper :top-images="topimages" @load="imageload"></detail-swiper>
      <detail-baseinfo :goods="goods"></detail-baseinfo>
      <detail-shopinfo :shop="shop"></detail-shopinfo>
      <detail-goodsinfo :goodsinfo="goodsinfo"></detail-goodsinfo>
    </scroll>

  </div>
</template>

<script>
import detailNavbar from './childComps/detailnavbar'
import scroll from '@/components/common/scroll/scroll'   //移动端滚动使用原生还是会存在卡顿问题，所以这里依旧需要通过插件实现
import { getdetaildata, Goods, Shop } from '@/network/detail'

import DetailSwiper from './childComps/detailswiper'
import DetailBaseinfo from './childComps/detailBaseinfo'
import DetailShopinfo from './childComps/detailShopinfo'
import DetailGoodsinfo from './childComps/detailgoodsinfo'
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topimages: [],
      goods: {},
      shop: {},
      goodsinfo: {},
    }
  },
  components: {
    detailNavbar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShopinfo,
    scroll,
    DetailGoodsinfo

  },
  created() {
    // ---1. 保存商品的iid数据
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    // ---2 . 请求数据
    getdetaildata(this.iid).then(res => {
      console.log(res)
      const data = res.result;
      this.topimages = data.itemInfo.topImages

      // ---3 . 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // ---4 .获取店铺信息
      this.shop = new Shop(data.shopInfo)
      // ---5 .获取商品图片详情信息
      this.goodsinfo = data.detailInfo.detailImage[0]
    })
  },
  methods: {
    imageload() {
      this.$refs.scroll.refresh()
    },
    loadimage() { this.$refs.scroll.refresh() }
  },
  activated() {
  },
  updatated() {
    refresh()
    console.log("刷新一次")
  }
}
</script>

<style scoped>
.detail {
  /* 详情页不需要显示tabbar，设置定位让detail脱离标准流，一般设置relative(相对于自己，不影响其他人),不建议设置absolute或者fixed */
  position: relative;
  z-index: 99;
  background-color: #fff;
  /* 设置scroll滚动效果需要设置content高度，所以这里详情页面的高度设置为100vh（视口宽度），不能设置宽度 */
  height: 100vh;
}

.detail-navbar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.cotent {
  height: calc(100% - 44px);
}
</style>