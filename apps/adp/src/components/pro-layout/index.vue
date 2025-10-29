<template>
  <div class="pro-layout vertical-layout">
    <aside
      class="pro-layout-aside" :class="{
        'pro-layout-aside-collapsed': collapsed,
      }"
    >
      <n-button>123</n-button>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const collapsed = ref(false);
const sidebarWidth = computed(() => {
  if (collapsed.value) {
    return '80px';
  }
  return '200px';
});
</script>

<style scoped lang="scss">
.pro-layout {
  &.vertical-layout {
    width: v-bind(sidebarWidth);
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-right: 1px solid var(--border-color);
  }
}
</style>
