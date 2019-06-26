<template>
  <div class="collect">
    <pet-nav-bar
      class="header"
      bgcolor="#FF7597"
      fontColor="#ffffff"
      title="收藏文章"
      @leftClick="back"
    />
    <scroll class="wrapper" :data="listData" :pullup="true" :pulldown="true" @pulldown="loadData">
      <ul>
        <ListChild :row="item" v-for="(item,index) in listData" :key="index"></ListChild>
      </ul>
    </scroll>
  </div>
</template>
<script>
import Scroll from "@/components/Scroll";
import ListChild from "@/components/list-child";
import { getFollowAttention } from "@/api/appInfo";
import { Toast } from "vant";

export default {
  data() {
    return {
      listData: []
    };
  },
  mounted() {
    this.loadData();
  },
  components: {
    ListChild,
    Scroll
  },
  methods: {
    back() {
      this.$router.push("/center");
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
  }
}
</style>
