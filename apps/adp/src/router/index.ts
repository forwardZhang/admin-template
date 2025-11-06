import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

export function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }
      return to.hash ? { behavior: 'smooth', el: to.hash } : { left: 0, top: 0 };
    },
  });

  app.use(router);
}
