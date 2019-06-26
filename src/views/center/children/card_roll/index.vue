<template>
  <div class="card_roll">
    <pet-nav-bar title="优惠券" @leftClick="back" />
    <div class="not_coupon">
      <img src="../../imgs/not_coupon.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.push("/center");
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.card_roll{
  height: calc(100vh);
  background-color: @colorJ;
  .not_coupon{
    text-align: center;
    padding-top: 110px;
    img{
      width: 205px;
      height: auto;
      vertical-align: top;
    }
  }
}
</style>
