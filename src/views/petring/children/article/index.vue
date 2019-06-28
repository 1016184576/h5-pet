<template>
  <div class="collect">
    <pet-nav-bar
      class="header"
      :title="title"
      @leftClick="back"
    />
    <div class="block"></div>
    <scroll class="wrapper" :data="listData" :pullup="true">
      <van-pull-refresh  v-model="isLoading" @refresh="onRefresh">
        <ul>
          <ListChild :row="item" v-for="(item,index) in listData" :key="index"></ListChild>
        </ul>
      </van-pull-refresh>
    </scroll>
  </div>
</template>
<script>
import Scroll from "@/components/Scroll";
import ListChild from "@/components/list-child";
import { getHomePageConsult } from "@/api/homepage";
import { Toast, PullRefresh } from "vant";

export default {
  data() {
    return {
      listData: [],
      type:'ZT',
      title:'专题',
      isLoading:false
    };
  },
  mounted() {
    this.init();
  },
  components: {
    ListChild,
    Scroll,
    "van-pull-refresh": PullRefresh
  },
  methods: {
    back() {
      this.$router.push("/petring");
    },
    onRefresh(){
      setTimeout(() => {
        this.loadData();
        this.isLoading = false;
      }, 500);
    },
    init(){
      sessionStore.set('backSource',this.$route.fullPath);
      let { title, type }  = this.$route.query;
      this.title = title;
      this.type = type;
      this.loadData();
    },
    loadData() {
      getHomePageConsult({
        type: this.type
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
  padding-top: 44px;
  box-sizing: border-box;
  .wrapper {
    position: absolute;
    top: 54px;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
