<template>
  <div class="person-center">
    <div class="userinfo">
      <h2>我的</h2>
      <div class="info" @click="handleClick">
        <img :src="userInfo.avatar ? userInfo.avatar : './imgs/avatar.png'" alt>
        <span>{{userInfo.phone}}</span>
        <i class="iconfont icon-arrow"></i>
      </div>
      <div class="card">
        <div class="card-left">
          <router-link to="/attention">
            <span>{{appInfo.agreeNum}}</span>
            <p>关注店铺</p>
          </router-link>
        </div>
        <div class="line"></div>
        <div class="card-right">
          <router-link to="/collect">
            <span>{{appInfo.collectNum}}</span>
            <p>收藏文章</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="list">
      <router-link to="/card_roll" class="row">
        <img src="./imgs/card_roll.png" alt>
        <span>我的卡卷包</span>
        <i class="iconfont icon-arrow"></i>
      </router-link>
      <a :href="`tel:${appInfo.comCall}`" class="row">
        <img src="./imgs/service_phone.png" alt>
        <span>客服电话</span>
        <i class="iconfont icon-arrow"></i>
      </a>
    </div>
    <div class="list">
      <router-link to="/setup" class="row">
        <img src="./imgs/setup.png" alt>
        <span>设置</span>
        <i class="iconfont icon-arrow"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import { getAppInfo } from "@/api/appInfo"
import { mapActions } from "vuex";
import { Toast } from "vant";
export default {
  data() {
    return {
      userInfo:{},
      appInfo:{},
    };
  },
  created() {
    this.$store.dispatch("setTabActive", 2);
    this.loadUserInfo().then(res => {
      this.userInfo = res;
    }).catch(err=>{
      Toast(err.msg);
    })
    this.loadAppInfo();
  },
  methods: {
    ...mapActions([
      'loadUserInfo'
    ]),
    //加载APP信息
    loadAppInfo(){
      getAppInfo().then(res => {
        this.appInfo = res.data;
      }).catch(err=>{
        Toast(err.msg);
      })
    },
    handleClick(){
      this.$router.push("/userInfo")
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.person-center {
  height: calc(100vh);
  background-color: @colorJ;
  .userinfo {
    background: url(./imgs/bg.png) no-repeat top center;
    background-size: 100% 100%;
    position: relative;
    height: 210px;
    margin-bottom: 28px;
    h2 {
      font-size: 17px;
      font-family: "PingFangSC-Medium";
      height: 45px;
      line-height: 45px;
      color: @colorC;
      text-align: center;
      font-weight: 500;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 5px;
      padding: 0 15px;
      img {
        height: 60px;
        width: 60px;
        vertical-align: top;
        border-radius: 50%;
      }
      span {
        font-size: 14px;
        font-family: "PingFangSC-Regular";
        color: @colorC;
        flex: 1;
        padding-left: 8px;
      }
      i {
        color: @colorC;
        margin-right: 10px;
      }
    }
    .card {
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
      width: 310px;
      height: 100px;
      box-shadow: 0px 4px 3px 0px rgba(245, 245, 245, 0.54);
      border-radius: 10px;
      background-color: @colorC;
      display: flex;
      align-items: center;
      .card-left,
      .card-right {
        flex: 1;
        text-align: center;
        a{
          display: block;
          padding: 10px;
          span {
            font-size: 18px;
            font-family: "PingFangSC-Semibold";
            font-weight: 600;
            line-height: 18px;
            color: @colorN;
          }
          p {
            font-size: 14px;
            font-family: "PingFangSC-Regular";
            font-weight: 400;
            line-height: 14px;
            color: @colorK;
            margin-top: 12px;
          }
        }
      }
      .line {
        width: 1px;
        height: 65px;
        background-color: @colorM;
      }
    }
  }
  .list {
    padding-top: 10px;
    .row {
      background-color: @colorC;
      display: flex;
      align-items: center;
      padding: 0 25px;
      height: 53px;
      img {
        width: 22px;
        height: 22px;
      }
      span {
        flex: 1;
        font-size: 15px;
        font-family: "PingFangSC-Regular";
        font-weight: bold;
        color: @colorO;
        padding-left: 12px;
      }
      i {
        font-size: 14px;
        color: @colorP;
        font-weight: 600;
      }
    }
  }
}
</style>
