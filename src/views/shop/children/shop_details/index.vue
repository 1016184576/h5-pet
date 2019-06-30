<template>
  <div class="shop-details">
    <pet-nav-bar bgcolor="#FF7597" fontColor="#ffffff" title="商家详情" @leftClick="back" />
    <div class="shop-info">
      <StoreInfo :data="merchantInfoResDto">
        <Star :score="merchantInfoResDto.merchantLevel" />
      </StoreInfo>
      <AttentionShop
        :merchantId="merchantInfoResDto.id"
        :isAttention="merchantInfoResDto.isAttention"
      />
    </div>
    <div class="tabs">
      <div
        class="tab"
        :class="{active: tabIndex == 1}"
        @click="tabClick(1)"
      >商&nbsp;&nbsp;&nbsp;&nbsp;品</div>
      <div
        class="tab"
        :class="{active: tabIndex == 2}"
        @click="tabClick(2)"
      >简&nbsp;&nbsp;&nbsp;&nbsp;介</div>
      <div class="tab-line" :style="tabLineStyle"></div>
    </div>
    <div class="block"></div>
    <scroll class="wrapper" ref="scroll">
      <!---商家产品--->
      <ul class="product-list" v-show="tabIndex == 1">
        <li class="product-info" v-for="(item,index) in merchantProductResDto" :key="index">
          <img v-lazy="item.productBanner" alt />
          <p>{{item.productName}}</p>
          <span>¥{{item.productPrice}}</span>
        </li>
      </ul>
      <!---商家简介--->
      <div class="shop-introduction" v-show="tabIndex == 2">
        <!---店铺信息--->
        <div class="introduction-detail">
          <div class="section-title">
            <img src="../../imgs/icon1.png" alt />
            <h2>店铺信息</h2>
          </div>
          <ul class="info-list">
            <li>商户资质：{{merchantInfoResDto.merchantLabel}}</li>
            <li>详细地址：{{merchantInfoResDto.detailAddress}}</li>
            <li>联系电话：{{merchantInfoResDto.contract}}</li>
            <li>
              综合评级：
              <Star :score="merchantInfoResDto.merchantLevel" />
            </li>
          </ul>
          <div class="address-map" id="map"></div>
          <div class="section-title title2">
            <img src="../../imgs/icon2.png" alt />
            <h2>店铺照片</h2>
          </div>
          <div class="img-list">
            <img src="../../imgs/img_list1.png" alt />
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import { getMerchantInfo } from "@/api/merinfo";
import { Toast } from "vant";
import TMap from "@/common/map";

import Scroll from "@/components/Scroll";
import StoreInfo from "@/components/store-info";
import AttentionShop from "@/components/attention-shop";
import Star from "@/components/star";
export default {
  data() {
    return {
      merchantInfoResDto: {},
      merchantProductResDto: {},
      merchantId: 0,
      tabIndex: 1
    };
  },
  mounted() {
    let id = this.$route.query.id;
    if (id) {
      this.merchantId = parseInt(id);
    }
    this.loadListData();
  },
  computed: {
    tabLineStyle() {
      let width = 375 / 4;
      let X = (this.tabIndex * 2 - 1) * width;
      return {
        transform: `translateX(${X}px) translateX(-50%)`,
        transitionDuration: "0.3s"
      };
    }
  },
  components: {
    Scroll,
    StoreInfo,
    AttentionShop,
    Star
  },
  methods: {
    back() {
      this.$router.push("/shop");
    },
    tabClick(index) {
      this.tabIndex = index;
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    },
    initMap() {
      TMap()
        .then(qq => {
          let { longitude, latitude } = this.merchantInfoResDto;
          let map = new qq.maps.Map(document.getElementById("map"), {
            // 地图的中心地理坐标。
            center: new qq.maps.LatLng(longitude, latitude),
            zoom: 17,
            disableDefaultUI: true
          });
          /* let anchor = new qq.maps.Point(6, 6),
            size = new qq.maps.Size(24, 24),
            origin = new qq.maps.Point(0, 0),
            icon = new qq.maps.MarkerImage(
              require("../../imgs/markerIcon.png"),
              size,
              origin,
              anchor
            ); */
          let marker = new qq.maps.Marker({
            //icon: icon,
            map: map,
            position: map.getCenter()
          });
        })
        .catch(err => {
          console.log(err);
          Toast(err);
        });
    },
    loadListData() {
      getMerchantInfo({
        merchantId: this.merchantId
      })
        .then(res => {
          this.merchantInfoResDto = res.data.merchantInfoResDto;
          this.merchantProductResDto = res.data.merchantProductResDto;
          this.initMap();
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
.shop-details {
  height: calc(100vh);
  padding-top: 44px;
  box-sizing: border-box;
  .shop-info {
    display: flex;
    justify-content: space-between;
    padding: 22px 0;
  }
  .tabs {
    position: relative;
    display: flex;
    .tab {
      flex: 1;
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      font-family: "PingFangSC-Medium";
      color: @colorT;
      padding: 3px 0 8px 0;
    }
    .active {
      color: @colorU;
    }
    .tab-line {
      position: absolute;
      bottom: -3px;
      left: 0;
      z-index: 1;
      height: 3px;
      width: 94px;
      background-color: @colorV;
      border-radius: 3px;
    }
  }
  .block {
    height: 3px;
    width: 100%;
    background-color: @colorM;
  }
  .wrapper {
    position: absolute;
    top: 166px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .product-list {
      display: flex;
      flex-wrap: wrap;
      .product-info {
        font-size: 15px;
        line-height: 15px;
        width: 49.5%;
        padding: 13px 0 10px 0;
        &:nth-child(2n) {
          margin-left: 1%;
          p,
          span {
            padding-left: 0px;
          }
        }
        img {
          width: 100%;
          height: 122px;
          vertical-align: top;
        }
        p {
          font-family: "PingFang-SC-Bold";
          font-weight: 700;
          color: @colorK;
          padding: 10px 0;
          padding-left: 10px;
        }
        span {
          display: block;
          font-family: "PingFangSC-Medium";
          font-weight: 500;
          color: @colorU;
          padding-left: 10px;
        }
      }
    }
  }
  .section-title {
    display: flex;
    align-items: center;
    padding: 9px 15px;
    img {
      width: 19px;
      height: 19px;
    }
    h2 {
      font-size: 14px;
      color: @colorK;
      font-family: "PingFangSC-Semibold";
      padding-left: 6px;
    }
  }
  .title2 {
    img {
      width: 16px;
      height: 16px;
    }
  }
  .info-list {
    padding-left: 40px;
    li {
      height: 22px;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: @colorK;
    }
  }
  .address-map {
    width: 350px;
    height: 140px;
    margin: 10px auto;
  }
  .img-list {
    margin-top: 10px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
