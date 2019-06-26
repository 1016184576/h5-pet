import axios from 'axios'

import { server_base_url } from './config'

import { getLoginInfo, clearStorge } from '@/util/storage'

import { Toast } from 'vant'

import router from '@/router/index.js'

export default function fetch(opts) {
  return new Promise((resolve, reject) => {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    const instance = axios.create({
      //设置默认根地址
      baseURL: server_base_url,
      // 设置请求超时设置
      timeout: 12 * 1000,
      //设置请求时的header
      // headers: setReqHeaders()
    });
    if (opts.method.toUpperCase() === 'POST') {
      var storage = getLoginInfo();
      /* console.log(opts)
      Object.assign(opts.data || {}, {  //除掉掉opts.data undefined
        token: storage ? storage.token : '',
        version: '1.0.1',
        channel: 'wechat',
        reqData:{
          ...opts.data 
        }
      }) */
      opts.data = {  //除掉掉opts.data undefined
        token: storage ? storage.token : '',
        version: '1.0.1',
        channel: 'wechat',
        reqData:{
          ...opts.data 
        }
      }
    }
    

    instance(opts)
      .then(d => {
        loading.style.display = 'none';
        //token失效
        if (d.data && d.data.code == "PT000110") {
          router.replace({
            name: 'login',
            query: { redirect: router.currentRoute.fullPath }
          })
        }else if(d.data && d.data.code == "00000000"){
          resolve(d.data);
        } else {
          reject(d.data);
        }
      })
      .catch(err => {
        loading.style.display = 'none';
        handleError(err)
      })
  })
}

//错误处理
function handleError(err) {
  let {
    response: {
      status,
      headers
    }
  } = err;
  let msg = decodeURI(headers['description']) || null;
  switch (status) {
    case 403:
      msg = msg ? msg : "拒绝访问！";
      Toast('操作失败！错误原因 ' + msg)
      break;
    case 401:
      msg = msg ? msg : "未授权！";
      Toast('操作失败！错误原因 ' + msg);
      break;
    case 404:
      Toast('访问的接口地址未找到！')
      break;
    case 408:
      Toast('网络请求超时！')
      break;
    case 500:
      Toast('系统错误！')
      break;
  }
}




