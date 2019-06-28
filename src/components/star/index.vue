<template>
  <!--结构层-->
  <div class="star">
    <span v-for="(classn,index) in starArrs" :class="classn" :key="index" class="staritem"></span>
  </div>
</template>
<script >
export default {
  props: {
    score:{
      default: 5
    }
  },
  computed: {
    starArrs() {
      var starArr = []; //3.9
      //全星星的个数
      let onstar = parseInt(this.score);
      //是否有半星
      let halfStar = Math.round(this.score - onstar) ? true : false;
      //有多少课灰色的星星
      for (var i = 0; i < onstar; i++) {
        starArr.push("onstar");
      }
      if (halfStar) {
        starArr.push("halfstar");
      }
      while (starArr.length < 5) {
        starArr.push("offstar");
      }
      return starArr;
    }
  }
};
</script>
<style lang="less" scoped>
@size: 14px;
.star{
  display: flex;
}
/*独立作用域的样式*/
.staritem {
  display: inline-block;
  width: @size;
  height: @size;
  margin-right: 2px;
}
/*全星星*/
.onstar {
  background: url(./imgs/star24_on@2x.png) no-repeat top center;
  background-size: @size @size;
}
.halfstar {
  background: url(./imgs/star24_half@2x.png) no-repeat top center;
  background-size: @size @size;
}
.offstar {
  background: url(./imgs/star24_off@2x.png) no-repeat top center;
  background-size: @size @size;
}
</style>