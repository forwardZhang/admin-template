<template>
  <div class="logo">
    <NIcon :component="CubeSharp" size="40" color="#1890ff"></NIcon>
    <h1 class="ellipsis">
      Adp Admin
    </h1>
  </div>
</template>

<script setup lang="ts">
import { CubeSharp } from '@vicons/ionicons5';
</script>

<style scoped lang="scss">
.logo{
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
  h1{
    font-size: 18px;
    color: var(--text-color-2);
  }
}
</style>
