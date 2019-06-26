<template>
  <li class="list-child bt" @click="handleClick">
    <div class="child-left">
      <h3>{{row.subName}}</h3>
      <div>
        <span>{{row.subType}}</span>
        <i class="iconfont icon-yanjing"></i>
        <span>{{row.lookTimes}}</span>
      </div>
    </div>
    <div class="child-right">
      <img v-lazy="row.subBanner ? row.subBanner : require('./imgs/list1.png')" alt>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    row: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleClick(){
      console.log(this.row)
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.list-child {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  &:last-child{
    border: none;
  }
  .child-left {
    display: flex;
    flex-wrap: wrap;
    h3 {
      font-size: 15px;
      line-height: 18px;
      width: 185px;
      font-weight: 400;
      color: @colorK;
      margin-right: 20px;
      font-family: "PingFangSC-Regular";
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        line-height: 14px;
        font-family: "MicrosoftYaHei";
        color: @colorL;
      }
      i {
        margin-left: 8px;
        margin-right: 4px;
        font-size: 14px;
        padding-top: 2px;
        color: @colorG;
      }
    }
  }
  .child-right {
    img {
      width: 100px;
      height: 75px;
    }
  }
}
</style>
