<template>
  <div class="shop">
    商家
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){
    this.$store.dispatch("setTabActive", 1);
  },
  methods:{
    
  }
}
</script>
<style lang="less" scoped>

</style>
