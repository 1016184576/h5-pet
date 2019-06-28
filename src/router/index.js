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
    redirect: '/petring'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
      title: `${appName}`,
      requireAuth: true
    },
    children:[{
      path: '/petring',
      name: 'petring',
      component: () => import('@/views/petring'),
      meta: {
        title: `宠物圈`,
        requireAuth: true
      }
    },{
      path: '/shop',
      name: 'shop',
      component: () => import('@/views/shop'),
      meta: {
        title: `商家`,
        requireAuth: true
      }
    },{
      path: '/center',
      name: 'center',
      component: () => import('@/views/center'),
      meta: {
        title: `我的`,
        requireAuth: true
      }
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: `登陆`
    }
  },{
    path: '/setup',
    name: 'setup',
    component: () => import('@/views/center/children/setup'),
    meta: {
      title: `设置`,
      requireAuth: true
    }
  },{
    path: '/aboutAs',
    name: 'aboutAs',
    component: () => import('@/views/center/children/aboutAs'),
    meta: {
      title: `关于我们`,
      requireAuth: true
    }
  },{
    path: '/card_roll',
    name: 'card_roll',
    component: () => import('@/views/center/children/card_roll'),
    meta: {
      title: `优惠券`,
      requireAuth: true
    }
  },{
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/views/center/children/userInfo'),
    meta: {
      title: `个人信息`,
      requireAuth: true
    }
  },{
    path: '/change_nickname',
    name: 'change_nickname',
    component: () => import('@/views/center/children/change_nickname'),
    meta: {
      title: `修改昵称`,
      requireAuth: true
    }
  },{
    path: '/change_password',
    name: 'change_password',
    component: () => import('@/views/center/children/change_password'),
    meta: {
      title: `修改登陆密码`,
      requireAuth: true
    }
  },{
    path: '/collect',
    name: 'collect',
    component: () => import('@/views/center/children/collect'),
    meta: {
      title: `收藏文章`,
      requireAuth: true
    }
  },{
    path: '/attention',
    name: 'attention',
    component: () => import('@/views/center/children/attention'),
    meta: {
      title: `关注店铺`,
      requireAuth: true
    }
  },{
    path: '/article',
    name: 'article',
    component: () => import('@/views/petring/children/article'),
    meta: {
      title: `文章`,
      requireAuth: true
    }
  },{
    path: '/article_detail',
    name: 'article_detail',
    component: () => import('@/views/petring/children/article_detail'),
    meta: {
      title: `文章详情`,
      requireAuth: true
    }
  },{
    path: '/shop_details',
    name: 'shop_details',
    component: () => import('@/views/shop/children/shop_details'),
    meta: {
      title: `商家详情`,
      requireAuth: true
    }
  }

];



const router = new Router({ 
  mode:'history',
  routes 
});



router.beforeEach((to, from, next) => {
  const userinfo = getLoginInfo();
  let token = userinfo ? userinfo.token : false
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }

  //判断路由是否需要登陆权限
  if (to.matched.some(r => r.meta.requireAuth)) {
    //判断是否登陆
    if (token) {
      if (to.name.indexOf('login') > -1) {
        next({
          path: ''
        })
      } else {
        next();
      }
    }else {
      next({
        name: 'login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
});

export default router