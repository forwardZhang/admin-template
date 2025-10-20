import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import { setupAntdComponent } from "@/adapter/antd-component";
async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  app.use(createPinia());
  setupAntdComponent(app);
  app.mount("#app");
}

export { bootstrap };
