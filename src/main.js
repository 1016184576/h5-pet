import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';
import { development } from '@/common/config';
import store from './store';

import "@/assets/style/reset.less";
import "@/assets/style/common.less";

import  'amfe-flexible';

//开发模式下打开调试
if(development){
  const VConsole = require('vconsole/dist/vconsole.min.js')
  new VConsole();
}
 


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});