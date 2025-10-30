import type { App } from 'vue';
import { create, NButton, NCard, NIcon, NMenu, NScrollbar, NSpace } from 'naive-ui';

export function setupNaiveComponent(app: App) {
  const naive = create({
    components: [NButton, NCard, NSpace, NIcon, NScrollbar, NMenu],
  });

  app.use(naive);
}
