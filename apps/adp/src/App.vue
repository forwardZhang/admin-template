<template>
  <NConfigProvider :date-locale="dateZhCN" :locale="zhCN" :theme="lightTheme" :theme-overrides="themeOverrides" inline-theme-disabled class="full-screen">
    <NEl class="full-screen">
      <NNotificationProvider>
        <NMessageProvider>
          <RouterView />
        </NMessageProvider>
      </NNotificationProvider>
      <NAvatar />
    </NEl>
  </NConfigProvider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import { dateZhCN, lightTheme, NEl, zhCN } from 'naive-ui';
import { computed } from 'vue';
import { useAppSettingStore } from '@/store/app-setting';

const appSettingStore = useAppSettingStore();
const themeOverrides = computed((): GlobalThemeOverrides => {
  return appSettingStore.themeOverrides;
});
</script>

<style scoped lang="scss"></style>
