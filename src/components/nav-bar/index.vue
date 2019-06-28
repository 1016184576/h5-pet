<template>
  <div class="nav-bar" :style="{backgroundColor:bgcolor}">
    <a class="back" @click="click" v-if="!isSlotsBool">
      <van-icon name="arrow-left" :color="fontColor" size="0.48rem" />
    </a>
    <slot name="leftIcon" v-else></slot>
    <span :style="{color:fontColor}">{{title}}</span>
  </div>
</template>
<script>
import { Icon } from 'vant';
export default {
  props:{
    title:{
      type: String,
      default: '标题'
    },
    bgcolor:{
      type: String,
      default: '#ffffff'
    },
    fontColor:{
      type: String,
      default: '#333333'
    },
  },
  computed:{
    isSlotsBool(){
      return this.$slots.leftIcon ? true : false;
    }
  },
  components:{
    "van-icon": Icon
  },
  methods:{
    click(){
      this.$emit('leftClick');
    }
  }
}
</script>
<style lang="less" scoped>
.nav-bar{
  height: 44px;
  line-height: 44px;
  width: 100%;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  text-align: center;
  .back{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
  }
  span{
    font-family: 'PingFangSC-Medium';
    font-size: 17px;
    font-weight:500;
    display: block;
    height: 44px;
    line-height: 44px;
  }
}
</style>
