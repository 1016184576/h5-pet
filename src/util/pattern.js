/**
 * 该位置用于存放正则表达式
 * 需要用到的正则
 *   中文姓名
 *   身份证号
 *   银行卡号
 *   手机号码
 */

 //手机号
export const isphonePattern = /^1[3|5|6|7|8|9]\d{9}$/

//
// export const isTelphone = /^(0[0-9]{2,3})\-?[0-9]{7,8}$/;
export const isTelphone = /^[0-9]{5,}$/;
//中文姓名
export const isrealNamePattern = /^[\u4E00-\u9FA5]{1,5}$/

//银行卡号
export const isBankcard =/^[0-9]{16,19}$/ // TODO: 15-20位 与natvie确认统一

//身份证
export const isID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

//服务密码
export const isSeverPwd = /^[0-9]{6}$/

//6位短信验证码
export const isSmsPwd = /^[0-9]{6}$/

// 登录密码 至少包含数字和字母 长度为8-15个字符
export const isLoginPwd = /^(?=.*[a-z]|[A-Z])(?=.*\d)[^]{8,15}$/;