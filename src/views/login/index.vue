<template>
  <div class="container">
    <Logo/>
    <div class="form" v-if="loginType == 'sms'">
      <div class="filed-box">
        <img src="../../assets/imgs/phone@2x.png" alt>
        <input type="tel" v-model="phone" @blur="inputBlur" placeholder="请输入手机号">
      </div>
      <div class="filed-box">
        <img src="../../assets/imgs/code@2x.png" alt>
        <input type="tel" v-model="verifyCode" @blur="inputBlur" placeholder="请输入验证码">
        <div class="get-verify-code" :class="{'disabled':disabled}" @click="getVerifyCode" v-debounceBtn="1000">{{verifyText}}</div>
      </div>
      <div class="login-type">
        <a @click="switchLoginType('pwd')">密码登陆</a>
      </div>
      <button @click="login" class="ok_btn login" v-debounceBtn="1000">登陆</button>
    </div>
    <div class="form" v-else>
      <div class="filed-box">
        <img src="../../assets/imgs/phone@2x.png" alt>
        <input type="tel" v-model="phone" @blur="inputBlur" placeholder="请输入手机号">
      </div>
      <div class="filed-box">
        <img src="../../assets/imgs/code@2x.png" alt>
        <input type="tel" v-model="password" @blur="inputBlur" placeholder="请输入密码">
      </div>
      <div class="login-type">
        <a @click="switchLoginType('sms')">短信登陆</a>
      </div>
      <button @click="login" class="ok_btn login" v-debounceBtn="1000">登陆</button>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { isphonePattern, isSmsPwd } from "@/util/pattern";
import { login, sendSms } from "@/api/account";
import { setLoginInfo } from "@/util/storage";
import debounceBtn from "@/util/directives";
import Logo from "@/components/logo";

const NUM = 60;
export default {
  data() {
    return {
      phone: "18321796391",
      verifyCode: "",
      password: "",
      verifyText: "获取验证码",
      number: NUM,
      disabled: false,
      loginType: "sms"
    };
  },
  created() {
    console.log(this.$route.query.redirect);
  },
  components: {
    Logo
  },
  methods: {
    switchLoginType(type) {
      this.loginType = type;
    },
    inputBlur() {
      setTimeout(function() {
        var scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight, 0));
      }, 100);
    },
    //获取验证码
    getVerifyCode() {
      if (!this.disabled) {
        if (this.phone == "") {
          return Toast("请输入手机号码");
        } else if (!isphonePattern.test(this.phone)) {
          return Toast("手机号格式错误");
        } else {
          sendSms({
            phone: this.phone
          })
            .then(res => {
              this.sendCode();
            })
            .catch(err => {
              Toast(err.msg);
            });
        }
      }
    },
    sendCode() {
      this.disabled = true;
      this.verifyText = `${this.number}秒后重试`;
      setTimeout(() => {
        if (this.number > 0) {
          this.number--;
          this.verifyText = `${this.number}秒后重试`;
          this.sendCode();
        } else {
          this.number = NUM;
          this.verifyText = `获取验证码`;
          this.disabled = false;
        }
      }, 1000);
    },
    //用户登陆
    login() {
      let params = {};
      //短信登陆
      if (this.loginType == "sms") {
        if (this.phone == "") {
          return Toast("请输入手机号码");
        } else if (this.verifyCode == "") {
          return Toast("请输入验证码");
        } else if (!isphonePattern.test(this.phone)) {
          return Toast("手机号格式错误");
        } else if (!isSmsPwd.test(this.verifyCode)) {
          return Toast("验证码格式错误");
        } else {
          params["checkCode"] = this.verifyCode;
        }
      } else {
        if (this.phone == "") {
          return Toast("请输入手机号码");
        } else if (this.password == "") {
          return Toast("请输入密码");
        } else if (!isphonePattern.test(this.phone)) {
          return Toast("手机号格式错误");
        } else {
          params["passWord"] = this.password;
        }
      }
      params["phone"] = this.phone;
      login(params)
        .then(res => {
          setLoginInfo(res.data);
          let redirect = this.$route.query.redirect;
          this.$router.push({
            path: redirect ? redirect : "/home"
          })
        })
        .catch(err => {
          Toast(err.msg);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../less/default.less";
.container {
  width: 100%;
  height: calc(100vh);
  background-color: @colorA;
  .form {
    width: 340px;
    height: 320px;
    text-align: center;
    font-size: 16px;
    border-radius: 15px 15px 0 0;
    background: -webkit-linear-gradient(
      #fff 40%,
      @colorA
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#fff 40%, @colorA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#fff 40%, @colorA); /* Firefox 3.6 - 15 */
    background: linear-gradient(#fff 40%, @colorA);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 40px 15px 0 15px;
    box-sizing: border-box;
    .filed-box {
      border-bottom: 1px solid @colorE;
      height: 45px;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 15px;
        height: 18px;
        vertical-align: top;
        margin: 0 10px 0 8px;
      }
      input {
        flex: 1;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
      }
      input::-webkit-input-placeholder {
        color: @colorF;
        line-height: 30px;
        font-family:Adobe Heiti Std R;
      }
      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: @colorF;
        line-height: 30px;
        font-family:Adobe Heiti Std R;
      }
      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: @colorF;
        line-height: 30px;
        font-family:Adobe Heiti Std R;
      }
      input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: @colorF;
        line-height: 30px;
        font-family:Adobe Heiti Std R;
      }
      .get-verify-code {
        width: 110px;
        height: 30px;
        background-color: @colorB;
        border-radius: 15px;
        color: @colorC;
        line-height: 30px;
        font-size: 13px;
        font-family:Adobe Heiti Std R;
      }
      .disabled{
        background-color: @colorI;
      }
    }
    .login-type{
      text-align: right;
      a{
        color: @colorG;
        font-size: 13px;
        margin-right: 20px;
        font-family:PingFangSC-Regular;
      }
    }
    .login {
      margin-top: 35px;
    }
  }
}
</style>
