<template>
  <div class="detailgoodsinfo">
    <!-- 商品描述 -->
    <div class="desc">{{ goodsinfo.desc }}</div>
    <!-- 穿着效果 -->
    <div class="key">{{ goodsinfo.key }}</div>
    <!-- 新品图片展示 -->
    <img v-for="(item, index) in goodsinfo.list" :key="index" :src="item" alt="" @load="loadimage"
      class="goodsinfoimage">
  </div>
</template>

<script>
export default {
  name: 'detailGoodsInfo',
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  props: {
    goodsinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    loadimage() {
      // 判断，所有的图片都加载完了，那么进行一次回调就可以了:思路给watch监听goodsinfo参数的变化，给变量赋一个参数length的值
      // 然后判断加载到的图片数量和传参过来的图片数是否相等，如果相等就自定义一个时间出去。让scroll监听这个事件，并通过方法refresh
      this.counter += 1
      // 每加载一张图片就让counter自加1
      if (this.counter === this.imagesLength) {
        this.$emit('loadimage')
        console.log('加载一次')
      }
    }
  },
  watch: {
    goodsinfo() {
      this.imagesLength = this.goodsinfo.list.length
    }
  }

}
</script>

<style scoped>
.goodsinfoimage {
  width: 100%;
}

.detailgoodsinfo {
  padding: 10px 8px;
}
</style>