<template>
  <div class="goods-item" @click="itemclick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  props: {
    goodsItem: {
      type: Object,
      default: {
        return: []
      }

    }
  },
  methods: {
    imageLoad() {
      // console.log('imageload')
      this.$bus.$emit('itemImageLoad')   //发射事件
    },
    itemclick() {
      // console.log('跳转详情页');
      this.$router.push('/detail' + this.goodsItem.iid)
    },

  }
}
</script>

<style>
.goods-item {
  position: relative;
  width: 48%;
  padding-bottom: 40px;

}

.goods-item img {
  width: 100%;
  border-radius: 8px;
}

.goods-info {
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3px;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 24px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -16px;
  width: 14px;
  height: 14px;
  background: url('~@/assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>