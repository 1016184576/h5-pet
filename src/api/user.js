/**
 * 根据
 */
import { user } from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

export const getUserInfo = (data) => {
    return fetch({
        url: `${user.getUserInfo}`,
        method: 'post',
        data
    })
}

export const modifyNickName = (data) => {
    return fetch({
        url: `${user.modifyNickName}`,
        method: 'post',
        data
    })
}

