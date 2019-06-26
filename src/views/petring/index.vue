<template>
  <div class="petring">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="/petring">
                <img src="//imgcps.jd.com/ling4/1404743/5b6u5rOi54KJ6auY5ZOB5ZGz/6LaF5YC854m55oOg/p-5c13869682acdd181deefebe/3aadf3a9/cr_1125x549_0_72/s1125x690/q70.jpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="/petring">
                <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/25219/36/721/56416/5c0c1eacEecb7837b/cfcc9d33eae893e3.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="/petring">
                <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/71971/19/1304/149780/5cf7ad40E4bfc3362/28d3250f4cbccd5e.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
              </a>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!--板块-->
    <div class="plate">
      <div>
        <img src="./imgs/special.png" alt="">
        <span>专题</span>
      </div>
      <div>
        <img src="./imgs/public_welfare.png" alt="">
        <span>宠物公益</span>
      </div>
      <div>
        <img src="./imgs/public_welfare.png" alt="">
        <span>宠物健康</span>
      </div>
    </div>
    <div class="list" ref="wrapper" style="padding-bottom:50px;">
      <ul>
        <ListChild :row="item" v-for="(item,index) in listData" :key="index"></ListChild>
      </ul>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import BScroll from 'better-scroll';
import ListChild from '@/components/list-child';

export default {
  data(){
    return{
      listData:[{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list1.png')
      },{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list2.png')
      },{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list3.png')
      },{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list1.png')
      },{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list2.png')
      },{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list3.png')
      },{
        id: 1,
        subName:'养宠物要做哪些养宠物要做哪些功课',
        subType:'养护',
        lookTimes: 110,
        subBanner: require('./imgs/list1.png')
      }]
    }
  },
  created(){
    this.$store.dispatch("setTabActive", 0);
    new Swiper('.swiper-container',{
      autoplay: true,
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: 1,
        click: true
      })
      this.scroll.on('pullingUp', () => {
        // 下拉动作
        /* if (pos.y > 50) {
          
        } */
        console.log(1)
      })
    }, 20);
  },
  components:{
    ListChild
  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.petring{
  background-color: @colorJ;
  .banner{
    width: 100%;
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
  .list{
    background-color: @colorC;
    margin-top: 10px;
  }
}

</style>
