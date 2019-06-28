<template>
  <div class="not_data">
    <img src="./imgs/not_data.png" alt>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "暂无数据"
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.not_data {
  position: relative;
  text-align: center;
  padding-top: 110px;
  img {
    width: 205px;
    height: auto;
    vertical-align: top;
  }
  p{
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 14px;
    color: @colorR;
    font-family: 'PingFangSC-Regular';
  }
}
</style>
