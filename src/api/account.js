/**
 * 根据
 */
import { account } from '@/common/api_url_config.js'
import fetch from '@/common/fetch'

export const login = (data) => {
    return fetch({
        url: `${account.login}`,
        method: 'post',
        data
    })
}

export const sendSms = (data) => {
    return fetch({
        url: `${account.sendSms}`,
        method: 'post',
        data
    })
}

export const modifyPassword = (data) => {
    return fetch({
        url: `${account.modifyPassword}`,
        method: 'post',
        data
    })
}

