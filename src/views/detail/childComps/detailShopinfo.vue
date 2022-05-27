<template>
  <div class="shopinfo">
    <!-- 标题部分 -->
    <div class="title">
      <img :src="shop.logo" class="logo">
      <span class="shopname">{{ shop.name }}</span>
    </div>
    <!-- 中间店铺信息部分 -->
    <div class="shop-middle">
      <!-- 左边：总销量 -->
      <div class="shopinfo-item shop-middle-left">
        <div class="sells-count">
          {{ shop.sells | bigNumberTransform }}
        </div>
        <div class="sells-text">
          总销量
        </div>
      </div>
      <!-- 中间：全部宝贝 -->
      <div class="shopinfo-item infogoods">
        <div class="goodsnum">{{ shop.goodsCount }}</div>
        <div class="good-text">全部宝贝</div>
      </div>
      <!-- 左边：描述 score -->
      <div class="shopinfo-item shopinfo-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :style="item.isBetter && { color: 'red' }">{{ item.score }}</td>
            <td class="cost-per" :style="item.isBetter && { background: 'red' }">{{ item.isBetter ? "高" : "低" }}</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="jindian">
      <a href="">进店逛逛</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "detailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    bigNumberTransform(value) {
      const newValue = ['', '', ''];
      let fr = 1000;
      let num = 3;
      let text1 = '';
      let fm = 1;
      while (value / fr >= 1) {
        fr *= 10;
        num += 1;
        // console.log('数字', value / fr, 'num:', num)
      }
      if (num <= 4) {//千
        newValue[1] = '千';
        newValue[0] = parseInt(value / 1000) + '';
      } else if (num <= 8) {//万
        text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万';
        fm = '万' === text1 ? 10000 : 10000000;
        newValue[1] = text1;
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + '';
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + '';
        }
      } else if (num <= 16) {//亿
        text1 = (num - 8) / 3 > 1 ? '千亿' : '亿';
        text1 = (num - 8) / 4 > 1 ? '万亿' : text1;
        text1 = (num - 8) / 7 > 1 ? '千万亿' : text1;

        fm = 1;
        if ('亿' === text1) {
          fm = 100000000;
        } else if ('千亿' === text1) {
          fm = 100000000000;
        } else if ('万亿' === text1) {
          fm = 1000000000000;
        } else if ('千万亿' === text1) {
          fm = 1000000000000000;
        }
        newValue[1] = text1;
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + '';
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + '';
        }
      }
      if (value < 1000) {
        newValue[1] = '';
        newValue[0] = value + '';
      }
      return newValue.join('');
    }
  }
}
</script>

<style scoped>
.shopinfo {
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 15px 10px;
  vertical-align: middle;
  width: 100%;
  border-bottom: 4px solid rgba(100, 100, 100, .1);
}

.logo {
  width: 30px;
  margin: 0px 8px 0 0;

}

.infogoods {
  margin-right: 30px;
}

.title {
  display: flex;
  font-family: 'heiti';
}

.shop-middle {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding: 15px 10px;
  font-size: 12px;

}

.shop-middle .shop-score table tr .score {
  color: green;
}

.shop-middle .shop-score table tr .cost-per {
  background: green;
  color: #fff;
}

.shopinfo-item {
  text-align: center;

}

.shopinfo-right {
  padding-top: -15px;
}

.jindian {
  width: 120px;
  height: 25px;
  background-color: #eee;
  border-radius: 10px;
  font-size: 13px;
  margin: auto;
  text-align: center;
  line-height: 25px;
}

.shopinfo-item td {
  margin-right: 5px;
}
</style>