
import { getUserInfo } from '@/api/user';
/**
 * @description  Action生命位置
 */
const SET_USER_INFO = "SET_USER_INFO";

const user = {
    state: {
        userinfo: null
    },
    mutations: {
      [SET_USER_INFO](state,userinfo){
        state.userinfo = userinfo;
        sessionStore.set("userinfo",userinfo);
      }
    },
    actions: {
      loadUserInfo({ commit }){
        return new Promise((resolve,reject)=>{
          let userinfo = sessionStore.get("userinfo");
          if(userinfo){
            commit(SET_USER_INFO, userinfo);
            resolve(userinfo);
          }else{
            getUserInfo().then(res=>{
              commit(SET_USER_INFO,res.data);
              resolve(res.data);
            }).catch(err=>{
              reject(err)
            })
          }
        })
      }
    },
    getters: {
      getUserInfo: state => {
        return state.userinfo;
      }
    }
}



export default user