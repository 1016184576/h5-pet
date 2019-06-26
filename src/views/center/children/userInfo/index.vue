<template>
  <div class="user-info">
    <pet-nav-bar class="header" title="个人信息" @leftClick="back" />
    <ul class="list">
      <li>
        <span class="cloumn-name">头像</span>
        <label><img src="../../imgs/add_avatar.png" alt=""></label>
      </li>
      <li>
        <router-link  :to="{name:'change_nickname',params:{nickname:userInfo.nickName}}">
          <span class="cloumn-name">昵称</span>
          <span>{{userInfo.nickName}}</span>
          <i class="iconfont icon-arrow"></i>
        </router-link>
      </li>
      <li>
        <span class="cloumn-name">手机号</span>
        <span>{{userInfo.phone}}</span>
      </li>
      <li>
        <router-link to="/change_password">
          <span class="cloumn-name">登陆密码</span>
          <i class="iconfont icon-arrow"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      userInfo:{}
    }
  },
  mounted(){
    let userinfo = sessionStore.get('userinfo');
    this.userInfo = userinfo || {}
  },
  methods:{
    back(){
      this.$router.push("/center");
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.user-info{
  height: calc(100vh);
  background-color: @colorC;
  .header{
    box-shadow:0px 4px 3px 0px rgba(245,245,245,0.54);
  }
  .list{
    padding: 40px 15px 0 15px;
    li{
      display: flex;
      height: 60px;
      align-items: center;
      font-size: 15px;
      font-family: 'PingFangSC-Regular';
      color: @colorR;
      border-bottom: 1px solid #E9E9FE;
      a{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      &:first-child{
        padding: 10px 0;
      }
      img{
        width: 62px;
        height: 62px;
      }
      .cloumn-name{
        color: @colorK;
        flex: 1;
      }
      i{
        margin-left: 15px;
        color: @colorS;
        font-size: 12px;
      }
    }
  }
}
</style>
