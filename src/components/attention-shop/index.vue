<template>
  <div class="attention-shop">
    <!--已关注显示-->
    <a v-if="bool" @click.stop="cancelAtten">
      <img src="./imgs/attention.png" alt>
      <span  class="attention">已关注</span>
    </a>
    <!--未关注显示-->
    <a v-else @click.stop="addAtten">
      <img src="./imgs/cancel_attention.png" alt>
      <span>关注</span>
    </a>
  </div>
</template>
<script>
import { addAttention, cancelAttention } from "@/api/collect";
import { Toast } from "vant";
export default {
  data(){
    return{
      bool: false
    }
  },
  props: {
    isAttention: {
      type: Number,
      default: 0
    },
    merchantId: {
      type: Number,
      default: 0
    }
  },
  created(){
    this.bool = this.isAttention == 1 ? true : false;
  },
  watch:{
    isAttention(val){
      this.bool = val == 1 ? true : false;
    }
  },
  methods: {
    //取消关注
    cancelAtten() {
      cancelAttention({
        merchantId: this.merchantId
      })
        .then(res => {
          this.bool = false;
          this.$toast("取消关注");
        })
        .catch(err => {
          Toast(err.msg);
        });
    },
    //关注
    addAtten() {
      addAttention({
        merchantId: this.merchantId
      })
        .then(res => {
          this.bool = true;
          this.$toast("关注成功");
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
.attention-shop{
  a{
    display: block;
    width: 60px;
    font-size: 12px;
    font-family: 'MicrosoftYaHei';
    color: @colorG;
    text-align: center;
    margin-right: 20px;
    margin-top: 10px;
    img{
      width: 24px;
      height: 22px;
      vertical-align: top;
    }
    span{
      padding-top: 4px;
      display: block;
    }
    .attention{
      color: @colorD;
    }
  }
}
</style>
