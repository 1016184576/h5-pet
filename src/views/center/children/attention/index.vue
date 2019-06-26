<template>
  <div class="collect">
    <pet-nav-bar
      class="header"
      bgcolor="#FF7597"
      fontColor="#ffffff"
      title="关注店铺"
      @leftClick="back"
    />
    <scroll class="wrapper" :data="listData" :pullup="true" :pulldown="true" @pulldown="loadData">
      <ul>
        <li v-for="(item,index) in listData" :key="index" class="bt">
          <storeInfo :data="item">
            <Star :score="item.merchantLevel" />
          </storeInfo>
          <a href="javascript:void(0);" class="arrow">
            <i class="iconfont icon-arrow"></i>
          </a>
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>

import { getFollowAttention } from "@/api/appInfo";
import { Toast } from "vant";

import Scroll from "@/components/Scroll";
import ListChild from "@/components/list-child";
import storeInfo from "@/components/store-info";
import Star from "@/components/star";

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
    Scroll,
    storeInfo,
    Star
  },
  methods: {
    back() {
      this.$router.push("/center");
    },
    loadData() {
      getFollowAttention({
        type: "GZDP"
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
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 95px;
      .arrow{
        display: block;
        margin-right: 20px;
        i{
          color: @colorP;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
