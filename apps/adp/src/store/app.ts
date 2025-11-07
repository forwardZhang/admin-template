import { merge } from 'es-toolkit';
import { defineStore } from 'pinia';
import { reactive, readonly, ref } from 'vue';

export const useAppStore = defineStore('app-setting', () => {
  const themeOverrides = ref({
    common: {
      borderRadius: '6px',
      primaryColor: '#006be6',
      primaryColorHover: '#0958d9',
      primaryColorSuppl: '#4096ff',
      primaryColorPressed: '#003eb3',
    },
    Button: {
      heightMedium: '32px',
    },
  });

  const layoutConfig = reactive({
    sidebarWidth: 224,
    headerHeight: 50,
  });

  function updateThemeOverrides(config = {}) {
    themeOverrides.value = merge(themeOverrides.value, config);
  }

  function updateLayoutConfig(config = {}) {
    merge(layoutConfig, config);
  }
  return { themeOverrides: readonly(themeOverrides), updateThemeOverrides, layoutConfig: readonly(layoutConfig), updateLayoutConfig };
});
