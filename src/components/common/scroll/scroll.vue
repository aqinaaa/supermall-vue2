<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1 .-----创建BSscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // better-sroll内部的div盒子要滚动的话，这里的clicks属性需要设置为true
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // console.log(this.scroll)
    // 2.------监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // console.log(positon)
      this.$emit('scroll', position)
    })
    // 3.------监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      // console.log('上拉加载更多')
      // setTimeout(() => {
      //   this.scroll.finishPullUp()
      // }, 2000);
    })


  },
  methods: {

    scrollTo(x, y, time = 300) {
      this.scroll && this.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('----------');
      this.scroll && this.scroll.refresh()
    }
  }

}


</script>
  

<style>
</style>