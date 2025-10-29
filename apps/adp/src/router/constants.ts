import type { RouteRecordRaw } from 'vue-router';

/**
 * 登录路由名称
 */
const LOGIN_ROUTE_PATH = '/login';

/**
 * 根路由，所有的动态路由都会添加到这个路由下
 */
const ROOT_ROUTE_NAME = 'Root';

const notFoundRoute: RouteRecordRaw = {
  path: '/:path(.*)*',
  component: () => import('@/views/_core/fallback/not-found.vue'),
  meta: {
    title: '404',
  },
};

/**
 * 根路由，所有的动态路由都会添加到这个路由下
 */
const rootRoute = {
  path: '/',
  name: ROOT_ROUTE_NAME,
  component: () => import('@/components/pro-layout/index.vue'),
  children: [],
  meta: {
    hideInBreadcrumb: true,
  },
};

/**
 * 忽略权限的路由
 */
const ignoreAccessRoutes: RouteRecordRaw[] = [
  {
    path: LOGIN_ROUTE_PATH,
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      requiresAuth: false,
    },
  },
];

export { ignoreAccessRoutes, LOGIN_ROUTE_PATH, notFoundRoute, ROOT_ROUTE_NAME, rootRoute };
