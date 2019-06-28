<template>
  <div class="wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<style lang="less" scoped>
@import "../../less/default.less";
  .wrap{
    position: fixed;
    left: 50%;
    top:50%;
    background-color: @colorD;
    opacity: .8;
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
    font-size: 14px;
  }
  .fadein {
    animation: animate_in 0.25s;
  }
  .fadeout {
    animation: animate_out 0.25s;
    opacity: 0;
  }
  @keyframes animate_in {
    0% {
      opacity: 0;
    }
    100%{
      opacity: .8;
    }
  }
  @keyframes animate_out {
    0% {
      opacity: .8;
    }
    100%{
      opacity: 0;
    }
  }
</style>