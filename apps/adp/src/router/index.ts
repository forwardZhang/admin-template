import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/index.vue';

export function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  });

  app.use(router);
}
