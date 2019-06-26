<template>
  <div class="user-info">
    <pet-nav-bar class="header" title="修改昵称" @leftClick="back" />
    <div class="nickname">
      <input type="text" v-model="nickname" placeholder="请输入昵称">
      <a @click="empty($event)">
        <i class="iconfont icon-guanbi"></i>
      </a>
    </div>
    <button class="ok_btn" @click="handleClick">确认</button>
  </div>
</template>
<script>
import { modifyNickName } from "@/api/user"
import { Toast } from 'vant';
import { mapActions } from "vuex";
export default {
  data(){
    return {
      nickname: this.$route.params.nickname  
    }
  },
  methods:{
    ...mapActions([
      'loadUserInfo'
    ]),
    back(){
      this.$router.push("/userInfo");
    },
    empty(e){
      this.nickname = "";
      e.preventDefault(); 
    },
    handleClick(){
      if(this.nickname == ''){
        Toast("请输入用户昵称");
      }else{
        modifyNickName({
          nickName: this.nickname
        }).then(res => {
          this.loadUserInfo().then(data => {
            this.$router.push("/userInfo");
          }).catch(error=>{
            Toast(error.msg);
          })
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
  padding-top: 60px;
  box-sizing: border-box;
  .nickname{
    background-color: @colorC;
    padding: 0 15px;
    display: flex;
    align-items: center;
    height: 53px;
    justify-content: space-between;
    input{
      font-family: 'PingFangSC-Regular';
      font-size: 15px;
      color: @colorR;
    }
  }
  .ok_btn{
    margin-top: 85px;
  }
}
</style>
