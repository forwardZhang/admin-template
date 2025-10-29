import { merge } from 'es-toolkit';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppSettingStore = defineStore('app-setting', () => {
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
  function updateThemeOverrides(config = {}) {
    themeOverrides.value = merge(themeOverrides.value, config);
  }

  return { themeOverrides, updateThemeOverrides };
});
