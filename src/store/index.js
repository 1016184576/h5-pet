import Vuex from 'vuex'
import Vue from 'vue'

//引入模块
import userinfo from './modules/userinfo';
import home from './modules/home';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userinfo,
        home
    }
})
