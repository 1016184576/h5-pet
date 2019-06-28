<template>
  <div class="container">
    <router-view />
    <Tabbar 
      v-model="tabActive"
      active-color="#FA4B61"
      inactive-color="#BBBBBB"
      @change="tabChange"
    >
      <TabbarItem>
        <span>宠物圈</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[0].active : icon[0].normal"
        >
      </TabbarItem>
      <TabbarItem>
        <span>商家</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[1].active : icon[1].normal"
        >
      </TabbarItem>
      <TabbarItem>
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon[2].active : icon[2].normal"
        >
      </TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import TMap from "@/common/map";
import { mapGetters } from 'vuex';
import { Tabbar, TabbarItem } from 'vant';

let tabActive = sessionStore.get('tabActive');
export default {
  data(){
    return {
      tabActive: tabActive ? parseInt(tabActive) : 0,
      icon:[{
        normal: require('./imgs/icon1.png'),
        active: require('./imgs/icon1_active.png')
      },{
        normal: require('./imgs/icon2.png'),
        active: require('./imgs/icon2_active.png')
      },{
        normal: require('./imgs/icon3.png'),
        active: require('./imgs/icon3_active.png')
      }]
    }
  },
  mounted() {
    /* TMap().then(qq => {
      console.log(qq);
    }); */
    /* if(tabActive){
      this.$store.dispatch("setTabActive", parseInt(tabActive));
       
    }*/
    this.tabActive = this.getTabActive;
  },
  computed:{
    ...mapGetters([
      'getTabActive'
    ])
  },
  components:{
    Tabbar,
    TabbarItem
  },
  watch:{
    'getTabActive'(val, oldVal) {
      console.log(val + '====== ');
      this.tabActive = val;
    }
  },
  methods: {
    tabChange(active){
      //this.$store.dispatch("setTabActive", active);
      let path = "/petring";
      if(active === 0){
        path = "/petring";
      }else if(active === 1){
        path = "/shop";
      }else{
        path = "/center";
      }
      this.$router.push(path);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
