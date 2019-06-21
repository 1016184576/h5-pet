import Vuex from 'vuex'
import Vue from 'vue'

//引入模块
import userinfo from './modules/userinfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userinfo,
    }
})
