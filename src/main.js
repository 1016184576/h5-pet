import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';
import "swiper/dist/css/swiper.css";
import { development } from '@/common/config';
import storage, { sessionStore } from '@/util/storage';
import store from './store';
import NavBar from "@/components/nav-bar";
import toastRegistry from '@/components/toast/index.js';

import "@/assets/font/iconfont.css";

import "@/less/reset.less";
import "@/less/common.less";


import VueLazyload from 'vue-lazyload'
import  'amfe-flexible';

/* Vue.use(VueLazyload) */
Vue.component('pet-nav-bar', NavBar);
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/imgs/error.png'),
  loading: require('@/assets/imgs/loading.gif'),
  attempt: 1
})
Vue.use(toastRegistry);

//开发模式下打开调试
if(development){
  const VConsole = require('vconsole/dist/vconsole.min.js')
  new VConsole();
}

window.storage = storage;
window.sessionStore = sessionStore;

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});