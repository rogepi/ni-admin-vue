/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import { vitePlugins } from './config'

export default defineConfig({
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
