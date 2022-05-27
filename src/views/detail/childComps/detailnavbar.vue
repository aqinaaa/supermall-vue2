<template>
  <nav-bar>
    <div slot="left" class="left" @click="backclick">
      <img src="../../../assets/img/common/back.svg" alt="">
    </div>
    <div class="center" slot="center">
      <div v-for="(item, index) in title" class="centeritem" :class="{ active: index === currentindex }"
        @click="itemclick(index)">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  name: "detailNavbar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentindex: 0
    }
  },
  methods: {
    itemclick(index) {
      this.currentindex = index
    },
    backclick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
}

.centeritem {
  flex: 1;
  font-size: 14px;
}

.active {
  color: var(--color-high-text)
}

.left {
  margin-top: 7px;
}
</style>