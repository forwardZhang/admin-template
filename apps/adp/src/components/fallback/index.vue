<template>
  <div class="fallback">
    <img v-if="image" :src="image" class="fallback-image">
    <component :is="fallbackIcon" v-else-if="fallbackIcon" class="fallback-icon" />
    <div class="fallback-content">
      <slot v-if="$slots.title" name="title" />
      <p v-else-if="titleText" class="content-title">
        {{ titleText }}
      </p>
      <slot v-if="$slots.describe" name="describe" />
      <p v-else-if="descText" class="content-describe">
        {{ descText }}
      </p>
      <slot v-if="$slots.action" name="action" />
      <!--      <a-button type="primary" :icon="h(ArrowLeftOutlined)"> -->
      <!--        返回首页 -->
      <!--      </a-button> -->
      <!--      <a-button type="primary" :icon="h(ArrowLeftOutlined)"> -->
      <!--        刷新 -->
      <!--      </a-button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FallbackProps } from './fallback';

import { computed, defineAsyncComponent } from 'vue';

import { useRouter } from 'vue-router';

interface Props extends FallbackProps {}

defineOptions({
  name: 'Fallback',
});

const props = withDefaults(defineProps<Props>(), {
  description: '',
  homePath: '/',
  image: '',
  showBack: true,
  status: undefined,
  title: '',
});

const Icon403 = defineAsyncComponent(() => import('./icons/icon-403.vue'));
const Icon404 = defineAsyncComponent(() => import('./icons/icon-404.vue'));
const Icon500 = defineAsyncComponent(() => import('./icons/icon-500.vue'));

const titleText = computed(() => {
  if (props.title) {
    return props.title;
  }

  switch (props.status) {
    case '403': {
      return '禁止访问, 您没有权限访问此资源';
    }
    case '404': {
      return '哎呀！未找到页面';
    }
    case '500': {
      return '哎呀！出错了';
    }
    default: {
      return '';
    }
  }
});

const descText = computed(() => {
  if (props.description) {
    return props.description;
  }
  switch (props.status) {
    case '403': {
      return '抱歉，您没有权限访问此页面。';
    }
    case '404': {
      return '抱歉，我们无法找到您要找的页面。';
    }
    case '500': {
      return '抱歉，服务器遇到错误。';
    }
    default: {
      return '';
    }
  }
});

const fallbackIcon = computed(() => {
  switch (props.status) {
    case '403': {
      return Icon403;
    }
    case '404': {
      return Icon404;
    }
    case '500': {
      return Icon500;
    }
    default: {
      return null;
    }
  }
});
// eslint-disable-next-line unused-imports/no-unused-vars
const showBack = computed(() => {
  return props.status === '403' || props.status === '404';
});

// eslint-disable-next-line unused-imports/no-unused-vars
const showRefresh = computed(() => {
  return props.status === '500';
});

const { push } = useRouter();

// 返回首页
// eslint-disable-next-line unused-imports/no-unused-vars
function back() {
  push(props.homePath);
}
// eslint-disable-next-line unused-imports/no-unused-vars
function refresh() {
  location.reload();
}
</script>

<style scoped lang="scss">
.fallback {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition-duration: 0.3s;
  .fallback-image {
    width: 50%;
    height: 33.3333%;
  }
  .fallback-icon {
    width: 50%;
    height: 33.3333%;
  }
  .fallback-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content-title {
    font-size: 30px;
    line-height: 36px;
    color: rgb(50, 54, 57);
    margin-top: 32px;
  }
  .content-describe {
    color: rgb(113, 113, 122);
    margin-bottom: 16px;
    margin-top: 16px;
  }
}
</style>
