<template>
  <div class="tab-bar-item" @click="itemclick">
    <!-- 建议都包装在一个div 里面，把绑定的类属性等放到div盒子上面 -->
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot  name="item-icon-active"></slot></div>
    <div :style="activestyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  data(){
    return{
      // isactive:false
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path) !== -1
      // $route是当前活跃状态的路由。
    },
    activestyle(){
      return this.isactive? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemclick(){
      // this.$router.replace(this.path)
     this.$router.push(this.path).catch(err=>err);
      // 连点报错问题解决
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-item img{
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.tab-bar-item p{
  margin:0
}
</style>