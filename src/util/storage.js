/**
 * 本地存储方法
 */
import { frontLoginKey } from '@/common/config'

export const clearLoginInfo = () => {
    localStorage.removeItem(frontLoginKey);
};

export const setLoginInfo = obj => localStorage.setItem(frontLoginKey, JSON.stringify(obj));

export const getLoginInfo = () => JSON.parse(localStorage.getItem(frontLoginKey));

export const $sessionStorage = {
    
}


export const $localStorage = {
    
}

