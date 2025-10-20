import { Button } from "ant-design-vue";
import { App } from "vue";

export function setupAntdComponent(app: App) {
  app.use(Button);
}
