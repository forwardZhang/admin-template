<template>
  <ConfigProvider :locale="zh_CN" :theme="tokenTheme">
    <App>
      <RouterView />
    </App>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { App, ConfigProvider, theme } from "ant-design-vue";
import { computed } from "vue";
import zh_CN from "ant-design-vue/es/locale/zh_CN";
const tokenTheme = computed(() => {
  const algorithm = theme.defaultAlgorithm;

  return {
    algorithm,
    token: {
      borderRadius: 8,
      colorBgBase: "#FFFFFF",
      colorBgContainer: "#FFFFFF",
      colorBgElevated: "#FFFFFF",
      colorBgLayout: "#F1F3F5",
      colorBgMask: "#00000073", // 45% 不透明度
      colorBorder: "#E4E5E7",
      colorBorderSecondary: "#E4E5E7",
      colorError: "#FF3B5C",
      colorInfo: "#0077FF",
      colorPrimary: "#0077FF",
      colorSuccess: "#47CC8A",
      colorTextBase: "#343638",
      colorWarning: "#F5C524",
      zIndexPopupBase: 2000
    }
  };
});
</script>

<style scoped lang="scss"></style>
