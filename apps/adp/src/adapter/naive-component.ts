import type { App } from 'vue';
import { create, NButton, NCard, NConfigProvider, NMessageProvider, NNotificationProvider, NSpace } from 'naive-ui';

export function setupNaiveComponent(app: App) {
  const naive = create({
    components: [NButton, NCard, NSpace, NConfigProvider, NMessageProvider, NNotificationProvider],
  });

  app.use(naive);
}
