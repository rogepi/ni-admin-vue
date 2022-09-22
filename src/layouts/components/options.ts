import type { MenuOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { RouterLink } from 'vue-router'

export interface IMenuItem {
  name: string
  path: string
  iconClass: string
  chirdren?: IMenuItem[]
}

export const menuList: IMenuItem[] = [
  {
    name: '首页',
    path: 'index',
    iconClass: 'i-mdi-home',
  },
  {
    name: '关于',
    path: 'about',
    iconClass: 'i-mdi-account',
  },
]

function renderLabel(path: string, name: string): {
  label: () => VNodeChild
  key: string
} {
  return {
    label: () => h(
      RouterLink,
      {
        to: { name: path },
      },
      {
        default: () => name,
      },
    ),
    key: path,
  }
}

const renderIcon = (className: string) => {
  return { icon: () => h('div', { class: className }) }
}

export const options: MenuOption[] = menuList.map((item) => {
  return {
    ...renderLabel(item.path, item.name),
    ...renderIcon(item.iconClass),
    chirdren: item?.chirdren,
  }
})
