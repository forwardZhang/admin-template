import type { RouteRecordRaw } from 'vue-router';
import { HOME_PATH } from '@/router/constants';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: HOME_PATH,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: `首页`,
    },
    component: () => import('@/views/home/index.vue'),
  },
];

export default routes;
