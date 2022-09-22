import { createFetch } from '@vueuse/core'
import { routeLocationKey } from 'vue-router'
import { message } from './descrete'
import { router } from '~/plugins/router'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

export const useRequest = createFetch({
  options: {
    timeout: 10000,

    // 拦截器
    async beforeFetch({ options }) {
      if (authStore.isLogin) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${authStore.token}`,
        }
      }
      return { options }
    },

    onFetchError(ctx) {
      if (ctx.response?.status === 401 && routeLocationKey.toString() !== 'login') {
        message.error('登录已经失效, 请重新登录')
        router.push('/login')
        authStore.reset()
      }
      else {
        message.error(ctx.response?.statusText || '请求失败')
      }
      return ctx
    },
  },
})
