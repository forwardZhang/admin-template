import type { RouteRecordRaw } from 'vue-router';
import { HOME_PATH } from '@/router/constants';

const routes: RouteRecordRaw[] = [
  {

    path: '/demos',
    name: 'Demos',
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: `演示`,
    },
    children: [
      {
        path: '/form',
        name: 'DemosForm',
        meta: {
          title: `表单`,
        },
        component: () => import('@/views/demos/form/index.vue'),
      },
      {
        path: '/form',
        name: 'DemosForm',
        meta: {
          title: `列表`,
        },
        component: () => import('@/views/demos/table/index.vue'),
      },
    ],
  },
];

export default routes;
