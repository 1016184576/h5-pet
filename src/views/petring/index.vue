<template>
  <div class="petring">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in bannerArr" :key="index">
              <a :href="item.bannerJumpUrl">
                <img :src="item.bannerUrl" alt="">
              </a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--板块-->
    <div class="plate">
      <div @click="plateClick(item)" v-for="(item,index) in plateArr" :key="index">
        <img :src="item.url" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="block"></div>
    <scroll class="wrapper" :data="listData" :pullup="true" @scrollToEnd="scrollToEnd" style="bottom:50px;">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul>
          <ListChild :row="item" v-for="(item,index) in listData" :key="index"></ListChild>
        </ul>
      </van-pull-refresh>
    </scroll>
  </div>
</template>
<script>
import { getHomePageBanner, getHomePageSubject } from '@/api/homepage';
import { Toast, PullRefresh } from 'vant';
import Swiper from 'swiper';

import ListChild from '@/components/list-child';
import Scroll from "@/components/Scroll";

export default {
  data(){
    return{
      listData:[],
      bannerArr:[],
      isLoading:false,
      plateArr:[{
        title:"专题",
        url: require('./imgs/special.png'),
        type: "ZT"
      },{
        title:"宠物公益",
        url: require('./imgs/public_welfare.png'),
        type: "CWGY"
      },{
        title:"宠物健康",
        url: require('./imgs/health.png'),
        type: "CWJK"
      }]
    }
  },
  created(){
    this.init();
  },
  components:{
    ListChild,
    Scroll,
    "van-pull-refresh": PullRefresh
  },
  methods:{
    onRefresh(){
      setTimeout(() => {
        this.loadListData();
        this.isLoading = false;
      }, 500);
    },
    scrollToEnd(){
      console.log(111111)
    },
    plateClick({ title, type }){
      this.$router.push({
        path:'/article',
        query:{
          title,
          type
        }
      })
    },
    init(){
      this.$store.dispatch("setTabActive", 0);
      this.loadBannerData();
      this.loadListData();
      this.$nextTick(()=>{
        new Swiper('.swiper-container',{
          autoplay: true,
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    },
    //加载banner数据
    loadBannerData(){
      getHomePageBanner().then(res=>{
        this.bannerArr = res.data;
      }).catch(err=>{
        Toast(err.msg);
      })
    },
    //加载首页列表数据
    loadListData(){
      getHomePageSubject().then(res=>{
        this.listData = res.data;
      }).catch(err=>{
        Toast(err.msg);
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.petring{
  height: calc(100vh);
  background-color: @colorC;
}
.petring{
  background-color: @colorJ;
  .banner{
    width: 100%;
    .swiper-slide{
      height: 125px;
    }
    a{
      display: block;
      img{
        width: 100%;
        height: 125px;
        vertical-align: top;
      }
    }
  }
  .plate{
    background-color: @colorC;
    padding: 35px 35px 15px 35px;
    display: flex;
    justify-content: space-between;
    height: 115px;
    box-sizing: border-box;
    div{
      text-align: center;
      img{
        width: 44px;
        height: 44px;
        vertical-align: top;
      }
      span{
        margin-top: 10px;
        display: block;
        font-size: 12px;
        line-height: 12px;
        color: @colorG;
        font-family: 'PingFangSC-Regular';
      }
    }
  }
  .wrapper{
    position: absolute;
    left: 0;
    top: 250px;
    background-color: @colorC;
    overflow: hidden;
  }
}

</style>
