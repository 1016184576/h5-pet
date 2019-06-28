/**
 * 根据
 */
import { homepage } from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

//获取首页banner数据
export const getHomePageBanner = (data) => {
    return fetch({
        url: `${homepage.getHomePageBanner}`,
        method: 'post',
        data
    })
}

//获取首页列表数据
export const getHomePageSubject = (data) => {
  return fetch({
      url: `${homepage.getHomePageSubject}`,
      method: 'post',
      data
  })
}

//获取专题，公益，健康列表页数据
export const getHomePageConsult = (data) => {
    return fetch({
        url: `${homepage.getHomePageConsult}`,
        method: 'post',
        data
    })
  }