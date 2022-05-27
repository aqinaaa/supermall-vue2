<template>
  <!-- 商品基本信息 -->
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <!-- 标题 -->
    <div class="info-title">{{ goods.title }} </div>
    <!-- 价格 -->
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <!-- 其他：销量 收藏 服务 -->
    <div class="info-other">
      <span>{{ goods.columns && goods.columns[0] }}</span>
      <span>{{ goods.columns && goods.columns[1] }}</span>
      <span>{{ goods.services && goods.services[goods.services.length - 1].name }}</span>
    </div>
    <!-- 服务 -->
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length - 1">
        <img :src="goods.services[index - 1].icon" alt="" srcset="">
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseinfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.base-info {
  width: 100%;
  padding: 10px 10px 10px;
  border-bottom: 4px solid rgba(100, 100, 100, .1);
}

.info-title {
  padding-bottom: 5px;
}

.n-price {
  color: var(--color-tint);
  font-size: 24px;
}

.o-price {
  color: #aaa;
  font-size: 14px;
  padding-left: 5px;
  text-decoration: line-through;

}

.info-other {
  display: flex;
  font-size: 14px;
  margin-top: 8px;
  color: var(--color-text);
  padding-bottom: 4px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, .2);
}

.info-service {
  display: flex;
  padding: 14px 0 0px;
  font-size: 14px;
  justify-content: space-between;
}

.info-service-item img {
  width: 13px;
}
</style>