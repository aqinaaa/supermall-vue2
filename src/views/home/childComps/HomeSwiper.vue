<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadimage">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swriper'   //导入轮播图模块
export default {
  name: "HomeSwiper",
  data() {
    return { isload: false }
  },
  props: {
    banners: {
      type: Array,
      // 父组件数据是一个return函数，默认设置为返回一个函数
      default() {
        return []
      }
    },
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    loadimage() {
      if (!this.isload) {
        this.$emit('swiperloadimage')
        this.isload = true
      }
    }
  }
}
</script>

<style>
</style>
