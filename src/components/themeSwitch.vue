<script setup lang="ts">
import { useGlobalStore } from '~/store'

const global = useGlobalStore()

const isDark = $ref(global.theme !== null)

watch(() => isDark, () => {
  global.toggleTheme()
})
</script>

<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-switch v-model:value="isDark" size="medium">
        <template #icon>
          <div class="i-carbon-moon" />
        </template>
        <template #unchecked-icon>
          <div class="i-carbon-sun " />
        </template>
      </n-switch>
    </template>
    <span>{{ isDark ? '切换亮色模式' : '切换暗色模式' }}</span>
  </n-popover>
</template>
