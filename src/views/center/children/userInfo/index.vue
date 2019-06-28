<template>
  <div class="user-info">
    <pet-nav-bar class="header" title="个人信息" @leftClick="back" />
    <ul class="list">
      <li>
        <span class="cloumn-name">头像</span>
        <label class="add_avatar" for="avatar">
          <img :src="getAvatarUrl" alt="">
          <input
            type="file"
            accept="image/*"
            id="avatar"
            @change="handleFileChange($event)"
          >
        </label>
      </li>
      <li>
        <router-link  :to="{path:'/change_nickname',query:{nickname:userInfo.nickName}}">
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
import { mapActions } from "vuex";
import { modifyAvatar } from '@/api/user';
import { Toast } from 'vant';

export default {
  data(){
    return {
      userInfo:{},
      avatarInfo:{
        base64: require("../../imgs/add_avatar.png"),
        file: null
      }
    }
  },
  mounted(){
    let userinfo = sessionStore.get('userinfo');
    this.userInfo = userinfo || {}
  },
  computed:{
    getAvatarUrl(){
      const { userInfo, avatarInfo } = this;
      return userInfo.avatar ? userInfo.avatar : avatarInfo.base64;
    }
  },
  methods:{
    ...mapActions([
      'loadUserInfo'
    ]),
    back(){
      this.$router.push("/center");
    },
    uploadAvatar(base64){
      let self = this;
      modifyAvatar({
        avatar: base64
      }).then(res => {
        sessionStore.remove("userinfo");
        self.loadUserInfo().then(data => {
          self.userInfo = data;
          Toast.success('上传成功');
        }).catch(error => {
          Toast(error.msg);
        })
      })
      .catch(err => {
        Toast(err.msg);
      });
    },
    handleFileChange(e) {
      var self = this;
      let inputDOM = e.target,
        obj = this.avatarInfo;

      // 通过DOM取文件数据
      obj.file = inputDOM.files[0];
      //alert(this.file);
      if (!inputDOM.files[0]) return false;
      if (["jpeg", "png", "jpg"].indexOf(obj.file.type.split("/")[1]) < 0) {
        Toast("请上传正确的图片格式");
        return false;
      } 
      EXIF.getData(inputDOM.files[0], function() {
        EXIF.getAllTags(this);
        self.Orientation = EXIF.getTag(this, "Orientation");
      });
      this.imgPreview(obj.file);
    },
    //把图片转成base64
    imgPreview(file) {
      let self = this;
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        // 创建一个reader
        var reader = new FileReader();
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file);
        var img = new Image();
        // 读取成功后的回调
        reader.onloadend = function() {
          img.src = reader.result;
        };
        img.onload = function() {
          let base64 = "";
          if (file.size >= 1024 * 200) {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            var drawWidth = "",
              drawHeight = "";
            if (self.Orientation == 6) {
              drawWidth = 180;
              drawHeight = -320;
              ctx.rotate((90 * Math.PI) / 180);
              ctx.drawImage(img, 0, 0, drawWidth, drawHeight);
            } else if (self.Orientation == 8) {
              drawWidth = -180;
              drawHeight = 320;
              ctx.rotate((270 * Math.PI) / 180);
              ctx.drawImage(img, 0, 0, drawWidth, drawHeight);
            } else if (self.Orientation == 3) {
              drawWidth = -320;
              drawHeight = -180;
              ctx.rotate((180 * Math.PI) / 180);
              ctx.drawImage(img, 0, 0, drawWidth, drawHeight);
            } else {
              ctx.drawImage(img, 0, 0, 320, 180);
            }
            base64 = canvas.toDataURL("image/jpeg", 1);
          } else {
            base64 = reader.result;
          }
          self.avatarInfo.base64 = base64;
          self.uploadAvatar(base64);
        };
      }
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
    padding: 84px 15px 0 15px;
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
        vertical-align: top;
        border-radius: 50%;
      }
      .cloumn-name{
        color: @colorK;
        flex: 1;
      }
      .add_avatar{
        input{
          display: none;
        }
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
