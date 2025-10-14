import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
async function bootstrap() {
  const app = createApp(App);
  app.use(router);
  app.use(createPinia());
  app.mount("#app");
}

export { bootstrap };
