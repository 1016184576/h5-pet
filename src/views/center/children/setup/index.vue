<template>
  <div class="setup">
    <pet-nav-bar title="设置" @leftClick="back" />
    <div class="list">
      <router-link to="/aboutAs" class="row">
        <img src="../../imgs/about.png" alt="">
        <span>关于我们</span>
        <i class="iconfont icon-arrow"></i>
      </router-link>
    </div>
    <button @click="loginOut" class="ok_btn login-out">退出</button>
  </div>
</template>
<script>
import { Dialog } from 'vant';
import { clearAll } from '@/util/storage';
export default {
  methods:{
    back(){
      this.$router.push("/center");
    },
    loginOut(){
      Dialog.confirm({
        title: '确认',
        message: '您确认要退出吗？'
      }).then(() => {
        clearAll();
        this.$router.push("/login");
      }).catch(()=>{})
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.setup{
  height: calc(100vh);
  background-color: @colorJ;
  .list{
    padding-top: 60px;
    .row{
      background-color: @colorC;
      display: flex;
      align-items: center;
      padding: 0 25px;
      height: 53px;
      img{
        width: 22px;
        height: 22px;
      }
      span{
        flex: 1;
        font-size:15px;
        font-family:'PingFangSC-Regular';
        font-weight:bold;
        color: @colorO;
        padding-left: 12px;
      }
      i{
        font-size: 14px;
        color: @colorP;
        font-weight: 600;
      }
    }
  }
  .login-out{
    margin-top: 90px;
  }
}
</style>
