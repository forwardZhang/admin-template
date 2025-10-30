import { merge } from 'es-toolkit';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

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

  const layoutSetting = reactive({
    /**
     * 布局模式
     */
    mode: 'vertical',
    /**
     * 是否显示顶栏
     */
    showNav: true,
    /**
     * 是否显示 logo
     */
    showLogo: true,
    /**
     * 是否显示侧边栏
     */
    showSidebar: true,
    /**
     * 是否显示标签栏
     */
    showTabbar: true,
    /**
     * 是否显示底部
     */
    showFooter: false,
    /**
     * 顶栏是否固定
     */
    navFixed: true,
    /**
     * 侧边栏是否折叠
     */
    collapsed: false,
    /**
     * 顶栏高度
     */
    navHeight: 50,
    /**
     * 侧边栏宽度
     */
    sidebarWidth: 224,
    /**
     * 底部高度
     */
    footerHeight: 32,
    /**
     * 底部是否固定
     */
    footerFixed: true,
    /**
     * 标签栏高度
     */
    tabbarHeight: 38,
    /**
     * 标签页主题
     */
    tabsMode: 'chrome',
    /**
     * 标签页是否持久化
     */
    tabsPersist: true,
    /**
     * 关闭标签页后是否重置缓存
     */
    resetCacheAfterCloseTab: true,
    /**
     * 侧边栏折叠后的宽度
     */
    sidebarCollapsedWidth: 58,
    /**
     * 侧边栏折叠后是否显示菜单名
     */
    sidebarCollapsedShowMenuTitle: true,
    /**
     * 当展示菜单标题时，侧边栏折叠后的宽度
     */
    sidebarCollapsedWidthWhenShowMenuTitle: 80,
    /**
     * 是否开启侧边栏菜单分组
     */
    sidebarMenuGroup: false,
    /**
     * 是否开启侧边栏菜单分割线
     */
    sidebarMenuDivider: false,
  });

  function updateLayoutSetting(config = {}) {
    Object.assign(layoutSetting, config);
  }
  return { themeOverrides, updateThemeOverrides, layoutSetting, updateLayoutSetting };
});
