<template>
  <div class="article_detail">
    <pet-nav-bar
      title="文章详情"
      @leftClick="back"
    />
  </div>
</template>
<script>
export default {
  mounted(){
    console.log(this.$route.query)
  },
  methods:{
    back(){
      let backSource = sessionStore.get('backSource');
      if(backSource){
        this.$router.push(backSource);
      }else{
        this.$router.push("/collect");
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
