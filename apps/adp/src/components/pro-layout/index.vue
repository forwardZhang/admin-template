<template>
  <div class="pro-layout">
    <aside
      class="layout-aside"
      :class="{
        'layout-aside-collapsed': collapsed,
      }"
    >
      <div class="layout-logo">
        <Logo />
      </div>
      <div class="layout-sidebar">
        <div class="layout-sidebar-content">
          <n-scrollbar class="layout-sidebar-scroll">
            <ProMenu
              v-bind="layout.verticalMenuProps"
              :indent="18"
              :collapsed-width="finalSidebarCollapsedWidth"
              :collapsed-show-title="sidebarCollapsedShowMenuTitle"
              :options="layout.verticalMenuProps.options"
              @update:value="pushTo"
            >
            </ProMenu>
          </n-scrollbar>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import Logo from './components/logo/index.vue';
import ProMenu from './components/menu/index.vue';
import { useLayoutMenu } from './hooks/use-layout-menu';
import testMenus from './test-menus';

const collapsed = ref(false);
const router = useRouter();
const route = useRoute();
const appSettingStore = useAppStore();
const {
  layout,
  // fullKeys,
  activeKey,
  // verticalLayout,
} = useLayoutMenu({
  mode: computed(() => appSettingStore.layoutSetting.mode),
  menus: computed(() => testMenus),
});
console.log('layout', layout.value);

const finalSidebarCollapsedWidth = 80;
const sidebarCollapsedShowMenuTitle = true;
async function pushTo(path: string) {
  const failure = await router.push(path);
  if (failure) {
    // 跳转失败回退
    activeKey.value = route.path;
  }
}
</script>

<style scoped lang="scss">
$n-bezier: var(--cubic-bezier-ease-in-out);
$layoutColor: var(--card-color);
.pro-layout {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: $layoutColor;
  color: var(--text-color-2);
  transition: color .3s $n-bezier, background-color .3s $n-bezier;
  .layout-aside{
    width: 224px;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: $layoutColor;
    border-right: 1px solid var(--border-color);
    transition:
      width .3s $n-bezier,
      background .3s $n-bezier,
      border-color .3s $n-bezier;
  }
  .layout-logo{
    padding-left:  12px;
    height: 50px;
    flex-shrink: 0;
  }
  .layout-sidebar{
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    .layout-sidebar-content{
      display: flex;
      flex-direction: column;
      height: 100%;
      :deep(>.layout-sidebar-scroll){
        flex:1 0 0;
      }
    }
  }
}
</style>
