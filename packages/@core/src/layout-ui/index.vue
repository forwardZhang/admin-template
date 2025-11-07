<template>
  <section class="app-layout">
    <aside class="app-sidebar">
      我是sidebar
    </aside>
    <section class="app-main">
      <header class="app-header">
        我是header
      </header>
      <section class="app-content">
        conetnet
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader } from 'naive-ui';

defineOptions({ name: 'AppLayout', inheritAttrs: false });

// const props = withDefaults(defineProps<{
//   attr?: Record<string, any>;
// }>(), {
//   attr: () => ({}),
// });
</script>

<style scoped lang="scss">
$sidebarWidth: --sidebar-width;
.app-layout{
  min-height: 100%;
  display: flex;
  .app-sidebar{
    flex: 0 0 $sidebarWidth;
    max-width: $sidebarWidth;
    min-width: $sidebarWidth;
    width: $sidebarWidth;
    height: calc(100% + 0px);
    z-index: 201;
  }
  .app-main{
    flex: 1;
    display: flex;
    flex-direction: column;
    .app-header{
      height: 50px;
    }
    .app-content{
      flex: 1;
    }
  }
}
</style>
