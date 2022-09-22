import type { PluginOption } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

export const vitePlugins: PluginOption[] = [
  Vue({
    reactivityTransform: true,
  }),

  // https://github.com/vbenjs/vite-plugin-mock
  viteMockServe(),

  // https://github.com/hannoeru/vite-plugin-pages
  Pages({
    importMode(filepath, options) {
      for (const page of options.dirs) {
        if (page.baseRoute === '' && filepath.startsWith(`/${page.dir}/index`))
          return 'sync'
      }
      return 'async'
    },
    exclude: ['**/components/*.vue'],
  }),

  // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
  Layouts(),

  // https://github.com/antfu/unplugin-auto-import
  AutoImport({
    imports: [
      'vue',
      'vue/macros',
      'vue-router',
      'pinia',
      '@vueuse/core',
      {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar',
        ],
      },
    ],
    dts: 'src/types/auto-imports.d.ts',
    dirs: [
      './src/composables',
    ],
    vueTemplate: true,
  }),

  // https://github.com/antfu/vite-plugin-components
  Components({
    resolvers: [NaiveUiResolver()],
    dts: 'src/types/components.d.ts',
  }),

  // https://github.com/antfu/unocss
  // see unocss.config.ts for config
  Unocss(),

]
