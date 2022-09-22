<script setup lang="ts">
import { options } from './options'
import { useGlobalStore } from '~/store'

const route = useRoute()
const activeMenu = computed(() => {
  return route.name as string
})

const global = useGlobalStore()
const { collapsed } = storeToRefs(global)
</script>

<template>
  <n-layout-sider
    collapse-mode="width" :collapsed-width="64" :width="220" show-trigger :native-scrollbar="false"
    bordered :collapsed="collapsed" @collapse="collapsed = true" @expand="collapsed = false"
  >
    <n-menu
      :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="options"
      :value="activeMenu"
    />
  </n-layout-sider>
</template>
