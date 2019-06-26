<template>
  <div class="store-info">
    <div class="avatar-info">
      <img v-lazy="data.merchantHeadPic ? data.merchantHeadPic : require('./imgs/avatar.png')" class="avatar"  alt="">
      <img src="./imgs/certification.png" class="certification" alt="">
    </div>
    <div class="info">
      <h2>{{data.merchantName}}</h2>
      <slot/>
      <span>{{data.address.length > 12 ? data.address.substr(0,12) : data.address }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.store-info{
  display: flex;
  align-items: center;
  .avatar-info{
    padding: 0 12px;
    position: relative;
    .avatar{
      width: 53px;
      height: 51px;
      border-radius: 50%;
      text-align: center;
      display: block;
    }
    .certification{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
      width: 45px;
      height: 13px;
    }
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    box-sizing: border-box;
    h2{
      font-size:14px;
      line-height: 14px;
      font-family:'PingFangSC-Semibold';
      font-weight:600;
      color: @colorK;
    }
    span{
      font-size: 12px;
      line-height: 12px;
      font-family: 'PingFangSC-Regular';
      color: @colorG;
    }
  }
}
</style>
