/**
 * 根据
 */
import { collect } from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

//关注店铺
export const addAttention = (data) => {
    return fetch({
        url: `${collect.addAttention}`,
        method: 'post',
        data
    })
}


//取消关注店铺
export const cancelAttention = (data) => {
  return fetch({
      url: `${collect.cancelAttention}`,
      method: 'post',
      data
  })
}


//添加文章收藏
export const addCollect = (data) => {
  return fetch({
      url: `${collect.addCollect}`,
      method: 'post',
      data
  })
}

//取消文章收藏
export const cancelCollect = (data) => {
  return fetch({
      url: `${collect.cancelCollect}`,
      method: 'post',
      data
  })
}
