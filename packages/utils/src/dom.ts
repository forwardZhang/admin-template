export function setElementProperties({ el, properties}: {
  el?: HTMLElement;
  properties: Record<string, any>;
}) {
  if (!el) {
    el = document.documentElement;
  }
  Object.entries(properties).forEach(([key, value]) => {
    el.style.setProperty(key, value);
  });
}
