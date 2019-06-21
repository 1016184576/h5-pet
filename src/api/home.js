/**
 * 根据
 */
import {home} from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

export const getHomeData = (data) => {
    return fetch({
        url: `${home.gethomeUrl}`,
        method: 'post',
        data
    })
}
export const invertMap = (data) => {
    return fetch({
        url: `${home.invertMap}`,
        method: 'post',
        data
    })
}

