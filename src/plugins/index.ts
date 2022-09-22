import type { App } from 'vue'

import { router } from './router'
import { pinia } from './pinia'

export const setupPlugins = (app: App<Element>) => {
  app.use(pinia)
  app.use(router)
}
