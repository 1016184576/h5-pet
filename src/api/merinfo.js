/**
 * 根据
 */
import { merinfo } from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

export const getMerchant = (data) => {
    return fetch({
        url: `${merinfo.getMerchant}`,
        method: 'post',
        data
    })
}

export const getMerchantInfo = (data) => {
  return fetch({
      url: `${merinfo.getMerchantInfo}`,
      method: 'post',
      data
  })
}


