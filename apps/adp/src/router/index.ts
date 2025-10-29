import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { ignoreAccessRoutes, notFoundRoute, rootRoute } from './constants';

export function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes: [rootRoute, ...ignoreAccessRoutes, notFoundRoute],
  });

  app.use(router);
}
