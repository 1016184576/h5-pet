<template>
  <div class="aboutAs">
    <pet-nav-bar title="关于我们" @leftClick="back" class="header" />
    <div class="logo">
      <img src="../../imgs/logo.png" alt="">
    </div>
    <div class="introduction">
      <h2>优选商家</h2>
      <p>宠乐吧平台为大家精选出来可信赖的优选商家，每个商家都要经过宠乐吧的各项认证，在您消费过程中更放心。</p>
      <h2>精选资讯</h2>
      <p>宠乐吧平台为大家挑选出各类有关萌宠的资讯和小动物公益信息。希望给每个喜爱小动物的您能有所帮助。</p>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.push("/setup");
    },
  }
}
</script>
<style lang="less" scoped>
@import "../../../../less/default.less";
.header{
  box-shadow:0px 4px 3px 0px rgba(245,245,245,0.54);
}
.logo{
  text-align: center;
  padding-top: 70px;
  img{
    width: 322px;
    height: auto;
    vertical-align: top;
  }
}
.introduction{
  padding: 0 20px;
  padding-top: 10px;
  font-family: 'PingFang-SC-Bold';
  h2{
    color: @colorQ;
    font-size: 15px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  p{
    font-size: 12px;
    line-height: 20px;
    color: @colorK;
  }
}

</style>
