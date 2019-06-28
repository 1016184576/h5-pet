<template>
  <div class="shop-details">
    <pet-nav-bar
      bgcolor="#FF7597"
      fontColor="#ffffff"
      title="商家详情"
      @leftClick="back"
    />
    <div class="shop-info">
      <StoreInfo :data="merchantInfoResDto">
        <Star :score="merchantInfoResDto.merchantLevel"/>
      </StoreInfo>
      <AttentionShop :merchantId="merchantInfoResDto.id" :isAttention="merchantInfoResDto.isAttention" />
    </div>
    <div class="tabs">
      <div class="tab" :class="{active: tabIndex == 1}" @click="tabClick(1)">商&nbsp;&nbsp;&nbsp;&nbsp;品</div>
      <div class="tab" :class="{active: tabIndex == 2}" @click="tabClick(2)">简&nbsp;&nbsp;&nbsp;&nbsp;介</div>
      <div class="tab-line" :style="tabLineStyle"></div>
    </div>
    <div class="block"></div>
    <scroll class="wrapper" ref="scroll">
      <!---商家产品--->
      <ul class="product-list" v-show="tabIndex == 1">
        <li class="product-info" v-for="(item,index) in merchantProductResDto" :key="index" >
          <img v-lazy="item.productBanner" alt="">
          <p>{{item.productName}}</p>
          <span>¥{{item.productPrice}}</span>
        </li>
      </ul>
      <!---商家简介--->
      <div class="shop-introduction" v-show="tabIndex == 2">
        <!---店铺信息--->
        <div class="introduction-detail">
          
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import { getMerchantInfo } from '@/api/merinfo';
import { Toast } from 'vant';

import Scroll from "@/components/Scroll";
import StoreInfo from "@/components/store-info";
import AttentionShop from "@/components/attention-shop";
import Star from "@/components/star";
export default {
  data(){
    return{
      merchantInfoResDto:{},
      merchantProductResDto:{},
      merchantId: 0,
      tabIndex: 1,
    }
  },
  created(){
    let id = this.$route.query.id;
    if(id){
      this.merchantId = parseInt(id);
    }
    this.loadListData();
  },
  computed: {
    tabLineStyle(){
      let width = 375 / 4;
      let X = ((this.tabIndex * 2) - 1) * width;
      return {
        transform: `translateX(${X}px) translateX(-50%)`,
        transitionDuration: "0.3s"
      }
    }
  },
  components: {
    Scroll,
    StoreInfo,
    AttentionShop,
    Star
  },
  methods:{
    back(){
      this.$router.push("/shop");
    },
    tabClick(index){
      this.tabIndex = index;
      this.$nextTick(()=>{
        this.$refs.scroll.refresh();
      })
    },
    loadListData(){
      getMerchantInfo({
        merchantId: this.merchantId
      }).then(res=>{
        this.merchantInfoResDto = res.data.merchantInfoResDto;
        this.merchantProductResDto = res.data.merchantProductResDto;
        
      }).catch(err=>{
        Toast(err.msg)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.shop-details{
  height: calc(100vh);
  padding-top: 44px;
  box-sizing: border-box;
  .shop-info{
    display: flex;
    justify-content: space-between;
    padding: 22px 0;
  }
  .tabs{
    position: relative;
    display: flex;
    .tab{
      flex: 1;
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      font-family: 'PingFangSC-Medium';
      color: @colorT;
      padding: 3px 0 8px 0;
    }
    .active{
      color: @colorU;
    }
    .tab-line{
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
  .block{
    height: 3px;
    width: 100%;
    background-color: @colorM;
  }
  .wrapper{
    position: absolute;
    top: 166px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .product-list{
        display: flex;
        flex-wrap: wrap;
        .product-info{
          font-size: 15px;
          line-height: 15px;
          width: 49.5%;
          padding: 13px 0 10px 0;
          &:nth-child(2n){
            margin-left: 1%;
            p,span{
              padding-left: 0px;
            }
          }
          img{
            width: 100%;
            height: 122px;
            vertical-align: top;
          }
          p{
            font-family: 'PingFang-SC-Bold';
            font-weight: 700;
            color: @colorK;
            padding: 10px 0;
            padding-left: 10px;
          }
          span{
            display: block;
            font-family: 'PingFangSC-Medium';
            font-weight:500;
            color: @colorU;
            padding-left: 10px;
          }
        }
      }
  }
}
</style>
