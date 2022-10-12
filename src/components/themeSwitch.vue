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
      <div text="5" cursor-pointer @click="isDark = !isDark">
        <div v-if="isDark" class="i-carbon-sun" />
        <div v-else class="i-carbon-moon" />
      </div>
    </template>
    <span>{{ isDark ? '切换亮色模式' : '切换暗色模式' }}</span>
  </n-popover>
</template>
