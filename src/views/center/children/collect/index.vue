<template>
  <div class="collect" :style="styleObject">
    <pet-nav-bar
      class="header"
      bgcolor="#FF7597"
      fontColor="#ffffff"
      title="收藏文章"
      @leftClick="back"
    />
    <scroll class="wrapper" :data="listData" :pullup="true">
      <van-pull-refresh v-if="listData.length > 0"  v-model="isLoading" @refresh="onRefresh">
        <ul>
          <ListChild :row="item" v-for="(item,index) in listData" :key="index"></ListChild>
        </ul>
      </van-pull-refresh>
      <NotData v-else msg="您还没有收藏文章哦~" />
    </scroll>
  </div>
</template>
<script>
import { getFollowAttention } from "@/api/appInfo";
import { Toast, PullRefresh } from "vant";

import Scroll from "@/components/Scroll";
import ListChild from "@/components/list-child";
import NotData from "@/components/not-data";

export default {
  data() {
    return {
      listData: [],
      isLoading: false,
      
    };
  },
  mounted() {
    sessionStore.set('backSource',this.$route.fullPath);
    this.loadData();
  },
  computed:{
      styleObject(){
        return { 
          backgroundColor: this.listData.length > 0 ? "#FFFFFF":"#F6F6F6"
        };
      }
  },
  components: {
    ListChild,
    Scroll,
    NotData,
    "van-pull-refresh": PullRefresh
  },
  methods: {
    back() {
      this.$router.push("/center");
    },
    onRefresh(){
      setTimeout(() => {
        this.loadData();
        this.isLoading = false;
      }, 500);
    },
    loadData() {
      getFollowAttention({
        type: "SCWZ"
      })
        .then(res => {
          this.listData = res.data;
        })
        .catch(err => {
          Toast(err.msg);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.collect {
  height: calc(100vh);
  background-color: @colorC;
  position: relative;
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 0;
    overflow: hidden;
    width: 100%;
  }
}
</style>
