/**
 * 配置url请求路径
 */
 export const account = {
   login: `api/account/login`,      //用户登陆
   sendSms: `api/account/sendCode`,  //发送短信验证码
   modifyPassword: 'api/account/modifyPassword',   //修改密码
 }
 
 export const user = {
   getUserInfo: 'api/user/getUserInfo',    //获取用户信息
   modifyNickName: 'api/user/modifyNickName',   //修改昵称
   modifyAvatar: 'api/user/modifyAvatar',       //修改头像
 }

 export const appInfo = {  
    getAppInfo: 'api/appinfo/getAppInfo',     //获取APP信息
    getFollowAttention: 'api/appinfo/getFollowAttention', //获取用户收藏文章和关注店铺的接口
 }


 export const homepage = {
  getHomePageBanner: 'api/homepage/getHomePageBanner',       //首页Banner接口
  getHomePageSubject: 'api/homepage/getHomePageSubject',     //首页列表接口
  getHomePageConsult: 'api/homepage/getHomePageConsult',     //文章分类列表接口
 }



 export const merinfo = {
  getMerchant: 'api/merinfo/getMerchant',         //获取商家列表接口
  getMerchantInfo: 'api/detail/getMerchantInfo',  //获取商家详情       
 }
 
 export const collect = {
  addAttention: 'api/collect/addAttention',           //关注商铺接口
  cancelAttention: 'api/collect/cancelAttention',           //取消关注商铺接口
  addCollect: 'api/collect/addCollect',           //收藏文章接口
  cancelCollect: 'api/collect/cancelCollect',           //取消收藏文章接口
 }
 

 