/**
 * 配置url请求路径
 */
 export const account = {
   login: `api/account/login`,      //用户登陆
   sendSms: `api/account/sendSms`,  //发送短信验证码
   modifyPassword: 'api/account/modifyPassword',   //修改密码
 }
 
 export const user = {
   getUserInfo: 'api/user/getUserInfo',    //获取用户信息
   modifyNickName: 'api/user/modifyNickName',   //修改昵称
   
 }

 export const appInfo = {  
    getAppInfo: 'api/appinfo/getAppInfo',     //获取APP信息
    getFollowAttention: 'api/appinfo/getFollowAttention', //获取用户收藏文章和关注店铺的接口
 }



 