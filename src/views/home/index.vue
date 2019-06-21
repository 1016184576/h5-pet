<template>
  <div class="container">
    <router-view></router-view>
    <Tabbar>
      <TabbarItem name="pet" icon="home-o">宠物圈</TabbarItem>
      <TabbarItem name="merchant" icon="search">商家</TabbarItem>
      <TabbarItem name="my" icon="friends-o">我的</TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import TMap from "@/common/map";
import { Tabbar, TabbarItem } from 'vant';
export default {
  created() {
    TMap().then(qq => {
      console.log(qq);
    });
  },
  components:{
    Tabbar,
    TabbarItem
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
