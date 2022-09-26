import type { GlobalTheme } from 'naive-ui'
import { darkTheme, useOsTheme } from 'naive-ui'

export const useGlobalStore = defineStore('global', () => {
  const collapsed = ref(false)

  const osTheme = useOsTheme()

  const initTheme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))

  const theme = ref<GlobalTheme | null>(initTheme.value)

  const toggleTheme = () => {
    theme.value = theme.value === null ? initTheme.value : null
  }

  return { collapsed, theme, toggleTheme }
},
{
  persist: true,
},
)
