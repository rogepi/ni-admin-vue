/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import { vitePlugins } from './config'

export default defineConfig({
  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://106.12.134.46:28019/api/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: vitePlugins,

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
