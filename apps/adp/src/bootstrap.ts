import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { setupNaiveComponent } from '@/adapter/naive-component';
import App from '@/App.vue';
import { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App);
  setupNaiveComponent(app);
  setupRouter(app);
  app.use(createPinia());
  app.mount('#app');
}

export { bootstrap };
