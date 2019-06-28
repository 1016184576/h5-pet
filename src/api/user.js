/**
 * 根据
 */
import { user } from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

//获取用户信息
export const getUserInfo = (data) => {
    return fetch({
        url: `${user.getUserInfo}`,
        method: 'post',
        data
    })
}


//修改昵称
export const modifyNickName = (data) => {
    return fetch({
        url: `${user.modifyNickName}`,
        method: 'post',
        data
    })
}


//修改头像
export const modifyAvatar = (data) => {
    return fetch({
        url: `${user.modifyAvatar}`,
        method: 'post',
        data
    })
}