import Vue from 'vue';
import Router from 'vue-router';
import { Toast } from 'vant'
import { getLoginInfo } from '@/util/storage.js'
import { appName } from '../common/config'
Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
      title: `${appName}`
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register'),
    meta: {
      title: `注册`
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: `登陆`
    }
  }
];



const router = new Router({ 
  mode:'history',
  routes 
});



router.beforeEach((to, from, next) => {
  const resource = from.query.resource || to.query.resource;
  to.query.resource = resource || '';
  const userinfo = getLoginInfo()
  let token = userinfo ? userinfo.token : false
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  //判断路由是否需要登陆权限
  if (to.matched.some(r => r.meta.requireAuth)) {
    //判断是否登陆
    if (token) {
      if (to.name.indexOf('loginpwd') > -1 || to.name.indexOf('loginsms') > -1) {
        next({
          path: ''
        })
      } else {
        next();
      }
    }
    else {
      next({
        name: 'loginsms',
        // query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
});

export default router