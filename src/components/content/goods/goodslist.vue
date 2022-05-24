<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodlistitem.vue'
export default {
  name: "goodsList",
  components: {
    goodsListItem
  },
  props: {
    goods: {
      type: Array,
      default: {
        return: []
      }
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
}
</style>