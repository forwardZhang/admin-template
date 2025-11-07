<template>
  <NConfigProvider
    :date-locale="dateZhCN"
    :locale="zhCN"
    :theme="lightTheme"
    :theme-overrides="themeOverrides"
    inline-theme-disabled
    class="full-screen"
  >
    <NEl class="full-screen">
      <NNotificationProvider>
        <NMessageProvider>
          <RouterView />
        </NMessageProvider>
      </NNotificationProvider>
    </NEl>
  </NConfigProvider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import { setElementProperties } from '@admin/utils';
import { dateZhCN, lightTheme, NConfigProvider, NEl, NMessageProvider, NNotificationProvider, zhCN } from 'naive-ui';
import { computed, onMounted, useTemplateRef } from 'vue';
import { RouterView } from 'vue-router';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const themeOverrides = computed((): GlobalThemeOverrides => {
  return appStore.themeOverrides;
});
</script>

<style scoped lang="scss"></style>
