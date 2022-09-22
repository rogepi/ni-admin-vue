import { RouterLink } from 'vue-router'

export const renderRouterLink = (title: string, path: string) => {
  return () => h(
    RouterLink,
    {
      to: { name: path },
    },
    {
      default: () => title,
    },
  )
}

export const renderIcon = (className: string) => {
  return () => h('div', { className })
}
