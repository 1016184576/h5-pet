<template>
  <div class="card_roll">
    <pet-nav-bar title="优惠券" @leftClick="back" />
    <NotData msg="暂无可用优惠券" />
  </div>
</template>
<script>
import NotData from "@/components/not-data";
export default {
  components:{
    NotData
  },
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
}
</style>
