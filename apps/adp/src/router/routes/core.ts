import type { RouteRecordRaw } from 'vue-router';
import { HOME_PATH, LOGIN_PATH } from '@/router/constants';

/** 全局404页面 */
const fallbackNotFoundRoute: RouteRecordRaw = {
  component: () => import('@/views/_core/fallback/not-found.vue'),
  meta: {
    hideInBreadcrumb: true,
    hideInMenu: true,
    hideInTab: true,
    title: '404',
  },
  name: 'FallbackNotFound',
  path: '/:path(.*)*',
};
const BasicLayout = () => import('@/layouts/basic.vue');
const coreRoutes: RouteRecordRaw[] = [
  /**
   * 根路由
   * 使用基础布局，作为所有页面的父级容器，子级就不必配置BasicLayout。
   * 此路由必须存在，且不应修改
   */
  {
    component: BasicLayout,
    meta: {
      hideInBreadcrumb: true,
      title: 'Root',
    },
    name: 'Root',
    path: '/',
    // redirect: HOME_PATH,
    children: [],
  },
  {
    path: LOGIN_PATH,
    name: 'Login',
    component: () => import('@/views/_core/authentication/login.vue'),
    meta: {
      title: `登 录`,
    },
  },
];
export {
  coreRoutes,
  fallbackNotFoundRoute,
};
