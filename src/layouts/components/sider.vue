<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { useGlobalStore } from '~/store'
import { renderIcon, renderRouterLink } from '~/utils'

export interface IMenuItem {
  title: string
  path: string
  iconClass: string
  chirdren?: IMenuItem[]
}

const menuList: IMenuItem[] = [
  {
    title: '首页',
    path: 'index',
    iconClass: 'i-mdi-home',
  },
  {
    title: '表格',
    path: 'table',
    iconClass: 'i-mdi-table',
  },
  {
    title: '关于',
    path: 'about',
    iconClass: 'i-mdi-account',
  },
]

const route = useRoute()
const active = computed(() => {
  return route.name as string
})

const global = useGlobalStore()
const { collapsed } = storeToRefs(global)

const options: MenuOption[] = menuList.map((item) => {
  return {
    label: renderRouterLink(item.title, item.path),
    key: item.path,
    icon: renderIcon(item.iconClass),
    chirdren: item?.chirdren,
  }
})

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

watch(() => isLargeScreen.value, () => {
  isLargeScreen.value === true ? collapsed.value = false : collapsed.value = true
})
</script>

<template>
  <n-layout-sider
    collapse-mode="width" :collapsed-width="64" :width="220" show-trigger :native-scrollbar="false"
    bordered :collapsed="collapsed" @collapse="collapsed = true" @expand="collapsed = false"
  >
    <n-menu
      :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="options"
      :value="active"
    />
  </n-layout-sider>
</template>
