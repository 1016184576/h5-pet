<template>
  <div class="user-info">
    <pet-nav-bar class="header" title="修改登陆密码" @leftClick="back" />
    <div class="list">
      <div class="row bt">
        <input type="password" v-model="password1" placeholder="请输入新密码">
        <a @click="empty($event,'password1')">
          <i class="iconfont icon-guanbi"></i>
        </a>
      </div>
      <div class="row">
        <input type="password" v-model="password2" placeholder="请再次输入新密码">
        <a @click="empty($event,'password2')">
          <i class="iconfont icon-guanbi"></i>
        </a>
      </div>
    </div>
    <button class="ok_btn" @click="handleClick">确认</button>
  </div>
</template>
<script>
import { modifyPassword } from "@/api/account"
import { Toast } from 'vant';
import { mapActions } from "vuex";
export default {
  data(){
    return {
      password1: "",
      password2: ""    
    }
  },
  methods:{
    back(){
      this.$router.push("/userInfo");
    },
    empty(e,filed){
      this[filed] = "";
      e.preventDefault(); 
    },
    handleClick(){
      if(this.password1 == '' || this.password2 == ''){
        Toast("请输入密码");
      }else if(this.password1 != this.password2){
        Toast("两次密码不一致");
      }else{
        modifyPassword({
          passWord: this.password1
        }).then(res => {
          this.$router.push("/userInfo");
        }).catch(err => {
          Toast(err.msg)
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.user-info{
  height: calc(100vh);
  background-color: @colorJ;
  .list{
    padding-top: 60px;
    .row{
      background-color: @colorC;
      display: flex;
      align-items: center;
      height: 53px;
      padding: 0 15px;
      justify-content: space-between;
      input{
        font-family: 'PingFangSC-Regular';
        font-size: 15px;
        color: @colorR;
      }
    }
  }
  
  .ok_btn{
    margin-top: 95px;
  }
}
</style>
