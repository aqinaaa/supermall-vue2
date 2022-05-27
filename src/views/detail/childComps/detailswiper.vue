<template>
  <swiper class="detailswiper">
    <swiper-item v-for="item in TopImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swriper"
export default {
  name: "detailswiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    TopImages: {
      type: Array,
      default() {
        return []

      }
    }
  }
}
</script>

<style scoped>
.detailswiper {
  height: 300px;
  overflow: hidden;
}
</style>