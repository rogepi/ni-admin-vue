// typings.d.ts or router.ts
import 'vue-router'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    auth?: boolean
  }
}
