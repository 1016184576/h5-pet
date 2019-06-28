<template>
  <div class="shop"  :style="styleObject">
    <pet-nav-bar
      bgcolor="#FF7597"
      fontColor="#ffffff"
      title="商家"
    >
      <a @click="positionClick($event)" slot="leftIcon" class="position">
        <img src="./imgs/position.png" alt="">
        <span>上海市</span>
      </a>
    </pet-nav-bar>
    <div class="tabs">
      <div class="tab">附&nbsp;&nbsp;&nbsp;&nbsp;近</div>
      <div class="tab">最新发布</div>
      <div class="tab">服&nbsp;&nbsp;&nbsp;&nbsp;务</div>
      <div class="tab">类&nbsp;&nbsp;&nbsp;&nbsp;别</div>
    </div>
    <div class="block"></div>
    <scroll class="wrapper" v-if="listData.length > 0" :data="listData" :pullup="true" style="bottom:50px;">
      <ul>
        <li v-for="(item,index) in listData" :key="index" class="bt" @click="shopDetails(item.merchantInfoResDto)">
          <div class="shop-info">
            <StoreInfo :data="item.merchantInfoResDto">
              <div class="num-info">
                关注量
                <span>17</span>
                评价
                <span>11</span>
              </div>
            </StoreInfo>
            <AttentionShop :merchantId="item.merchantInfoResDto.id" :isAttention="item.merchantInfoResDto.isAttention" />
          </div>
          <div class="product-list">
            <div class="product-info" v-for="obj in item.merchantProductResDto" :key="obj.id">
              <img v-lazy="obj.productBanner" alt="">
              <p>{{obj.productName}}</p>
              <span>¥{{obj.productPrice}}</span>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
    <NotData v-else msg="无符合条件的商家"/>
  </div>
</template>
<script>
import { getMerchant } from '@/api/merinfo';
import { Toast } from 'vant';

import Scroll from "@/components/Scroll";
import StoreInfo from "@/components/store-info";
import AttentionShop from "@/components/attention-shop";
import NotData from "@/components/not-data";
export default {
  data(){
    return{
      listData:[]
    }
  },
  created(){
    this.$store.dispatch("setTabActive", 1);
    this.loadList();
  },
  computed: {
    styleObject() {
      return {
        backgroundColor: this.listData.length > 0 ? "#FFFFFF" : "#F6F6F6"
      };
    }
  },
  components: {
    Scroll,
    StoreInfo,
    AttentionShop,
    NotData
  },
  methods:{
    positionClick(e){
      e.preventDefault();
    },
    shopDetails(shopInfo){
      this.$router.push({
        path:'shop_details',
        query:{
          id: shopInfo.id
        }
      })
    },
    loadList(){
      let params = {
        longitude: 121.48941,
        latitude: 31.40527,
        productTye: "",
        serviceType:[],
        position:"",
        release:""
      }
      getMerchant(params).then(res=>{
        this.listData = res.data.merchantDetailResDto;
      }).catch(err=>{
        Toast(err.msg)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.shop{
  height: calc(100vh);
  padding-top: 44px;
  box-sizing: border-box;
  .position{
    position: absolute;
    top: 0;
    left: 18px;
    bottom: 0;
    display: flex;
    align-items: center;
    img{
      width: 19px;
      height: 22px;
      margin-right: 4px;
    }
    span{
      font-family: 'PingFangSC-Regular';
      font-size: 12px;
      color: @colorC;
    }
  }
  .tabs{
    display: flex;
    padding-top: 8px;
    background-color: @colorC;
    .tab{
      position: relative;
      flex: 1;
      font-size: 14px;
      font-family: 'PingFangSC-Medium';
      text-align: center;
      color: @colorT;
      height: 29px;
      line-height: 29px;
      &::after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        height: 29px;
        width: 1px;
        background-color: @colorM;
        overflow: hidden;
      }
      &:last-child div:after{
        display:none; 
      }
    }
  }
  .block{
    height: 3px;
    width: 100%;
    background-color: @colorM;
  }
  .wrapper{
    position: absolute;
    top: 84px;
    left: 0;
    width: 100%;
    overflow: hidden;
    li{
      padding: 15px 0;
      .shop-info{
        display: flex;
        justify-content: space-between;
        margin-bottom: 13px;
        .num-info{
          font-size: 12px;
          line-height: 12px;
          color: @colorL;
          font-family: 'PingFangSC-Regular';
          span{
            color: @colorU;
            padding: 0 4px;
          }
        }
      }
      .product-list{
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        .product-info{
          font-size: 15px;
          line-height: 15px;
          width: 105px;
          img{
            width: 105px;
            height: 97px;
            vertical-align: top;
          }
          p{
            font-family: 'PingFang-SC-Bold';
            font-weight: 700;
            color: @colorK;
            padding: 10px 0;
          }
          span{
            display: block;
            font-family: 'PingFangSC-Medium';
            font-weight:500;
            color: @colorU;
          }
        }
      }
    }
  }
}
</style>
