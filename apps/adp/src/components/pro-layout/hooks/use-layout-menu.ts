import type { MenuOption, MenuProps } from 'naive-ui';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';

import type { ExpandedKey, MenuKey, ProLayoutMode } from '../types';
import { computed, ref, toValue, watch } from 'vue';
import { useMenus } from './use-menus';
import { useVerticalLayoutMenu } from './use-vertical-layout-menu';

export interface LayoutMenuReturn {
  /**
   * 水平菜单数据,一般放在 header 区域
   */
  horizontalMenuProps: MenuProps;
  /**
   * 垂直菜单数据,一般放在 sidebar 区域
   */
  verticalMenuProps: MenuProps;
  /**
   * 垂直菜单数据,一般放在 sidebar 额外区域
   */
  verticalExtraMenuProps: MenuProps;
}

export interface SharedLayoutOptions {
  /**
   * 展开菜单的 key 列表
   */
  expandedKeys: Ref<ExpandedKey[]>;
  /**
   * 当前激活的菜单 key
   */
  activeKey: Ref<MenuKey>;
  /**
   * 菜单数据
   */
  menus: ComputedRef<MenuOption[]>;
  /**
   * 获取菜单完整路径
   */
  getMenuKeyFullPath: (key: MenuKey) => NonNullable<MenuKey>[];
  /**
   * 菜单 key 到菜单项信息的映射
   */
  menuKeyToMetaMap: ComputedRef<Map<NonNullable<MenuKey>, {
    item: MenuOption;
    parentKey: MenuKey;
    childrenKeys: NonNullable<MenuKey>[];
  }>>;
  /**
   * 菜单数据中子菜单的字段名
   * @default 'children'
   */
  childrenField: string;
}

interface UseLayoutMenuOptions {
  /**
   * 菜单数据
   */
  menus: MaybeRefOrGetter<MenuOption[]>;
  /**
   * 布局模式
   */
  mode: MaybeRefOrGetter<ProLayoutMode>;
  /**
   * 是否为手风琴模式
   * @default false
   */
  accordion?: MaybeRefOrGetter<boolean>;
  /**
   * 菜单数据中子菜单的字段名
   * @default 'children'
   */
  childrenField?: string;
}

/**
 * 根据布局模式和菜单数据，计算出适用于不同布局模式下的菜单 props
 */
export function useLayoutMenu(options: UseLayoutMenuOptions) {
  const activeKey = ref<MenuKey>(null);
  const expandedKeys = ref<ExpandedKey[]>([]);
  const childrenField = options.childrenField ?? 'children';

  const mode = computed(() => {
    return toValue(options.mode);
  });

  const accordion = computed(() => {
    return toValue(options.accordion ?? false);
  });

  const {
    menus,
    fullKeys,
    getAncestorKeys,
    menuKeyToMetaMap,
    getMenuKeyFullPath,
  } = useMenus(options.menus, { childrenField });

  const sharedLayoutOptions: SharedLayoutOptions = {
    menus,
    activeKey,
    expandedKeys,
    childrenField,
    menuKeyToMetaMap,
    getMenuKeyFullPath,
  };

  const verticalLayout = useVerticalLayoutMenu(sharedLayoutOptions);

  const layout = computed(() => {
    switch (mode.value) {
      case 'sidebar':
      case 'vertical':
        return verticalLayout;
      default:
        return verticalLayout;
    }
  });

  watch(activeKey, () => {
    const keys = accordion.value
      ? getAncestorKeys(activeKey.value)
      : [...expandedKeys.value, ...getAncestorKeys(activeKey.value)];
    expandedKeys.value = Array.from(new Set(keys));
  });

  return {
    fullKeys,
    activeKey,
    getMenuKeyFullPath,
    layout: computed(() => {
      const privateLayout = layout.value;
      return privateLayout.layout.value;
    }),
    verticalLayout: computed(() => {
      return verticalLayout.layout.value;
    }),
  };
}
