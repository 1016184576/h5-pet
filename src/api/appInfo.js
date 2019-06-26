/**
 * 根据
 */
import {appInfo} from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

export const getAppInfo = (data) => {
    return fetch({
        url: `${appInfo.getAppInfo}`,
        method: 'post',
        data
    })
}

/**
 * 
 * 获取用户收藏文章和关注店铺的接口
 * type = GZDP   关注店铺，
 * type = SCWZ   收藏文章
 */
export const getFollowAttention = (data) => {
    return fetch({
        url: `${appInfo.getFollowAttention}`,
        method: 'post',
        data
    })
}


