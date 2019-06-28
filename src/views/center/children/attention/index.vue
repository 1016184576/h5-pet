<template>
  <div class="collect" :style="styleObject">
    <pet-nav-bar
      class="header"
      bgcolor="#FF7597"
      fontColor="#ffffff"
      title="关注店铺"
      @leftClick="back"
    />
    <scroll class="wrapper" :data="listData" :pullup="true">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-if="listData.length > 0">
        <ul>
          <li v-for="(item,index) in listData" :key="index" class="bt">
            <storeInfo :data="item">
              <Star :score="item.merchantLevel"/>
            </storeInfo>
            <a href="javascript:void(0);" class="arrow">
              <i class="iconfont icon-arrow"></i>
            </a>
          </li>
        </ul>
      </van-pull-refresh>
      <NotData v-else msg="您还没有关注店铺哦~"/>
    </scroll>
  </div>
</template>
<script>
import { getFollowAttention } from "@/api/appInfo";
import { Toast, PullRefresh } from "vant";

import Scroll from "@/components/Scroll";
import ListChild from "@/components/list-child";
import storeInfo from "@/components/store-info";
import Star from "@/components/star";
import NotData from "@/components/not-data";

export default {
  data() {
    return {
      listData: [],
      isLoading: false
    };
  },
  mounted() {
    this.loadData();
  },
  computed: {
    styleObject() {
      return {
        backgroundColor: this.listData.length > 0 ? "#FFFFFF" : "#F6F6F6"
      };
    }
  },
  components: {
    ListChild,
    Scroll,
    storeInfo,
    Star,
    NotData,
    "van-pull-refresh": PullRefresh
  },
  methods: {
    back() {
      this.$router.push("/center");
    },
    onRefresh() {
      setTimeout(() => {
        this.loadData();
        this.isLoading = false;
      }, 500);
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
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 95px;
      .arrow {
        display: block;
        margin-right: 20px;
        i {
          color: @colorP;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
