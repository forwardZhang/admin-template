<template>
  <n-menu
    class="pro-menu"
    :class="[
      mergedCollapsed && collapsedShowTitle && 'pro-menu--collapsed-show-title',
    ]"
    v-bind="nMenuProps"
  />
</template>

<script setup lang="ts">
import { menuProps } from 'naive-ui';
import { computed, toValue } from 'vue';

defineOptions({
  name: 'ProMenu',
});
const props = defineProps({
  ...menuProps,
  /**
   * 折叠后是否显示 title
   */
  collapsedShowTitle: {
    type: Boolean,
    default: undefined,
  },
  /**
   * 当折叠后是否显示 title 开启时，菜单项的高度
   * @default 82
   */
  menuItemHeightWhenCollapsedShowTitle: Number,
});
const mergedCollapsed = computed(() => {
  return false;
});
const nMenuProps = computed(() => {
  const {
    collapsedShowTitle,
    menuItemHeightWhenCollapsedShowTitle,
    ...rest
  } = props;

  if (!collapsedShowTitle || !mergedCollapsed.value) {
    return rest;
  }

  const itemHeight = menuItemHeightWhenCollapsedShowTitle ?? 64;
  return {
    ...rest,
    builtinThemeOverrides: {
      ...(rest.builtinThemeOverrides ?? {}),
      itemHeight: `${itemHeight}px`,
    },
  };
});
</script>

<style scoped lang="scss">

</style>
