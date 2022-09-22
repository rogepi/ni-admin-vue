export const useAuthStore = defineStore('auth', () => {
  const username = ref('')
  const token = ref('')

  const isLogin = computed(() => !!token.value)

  const reset = () => {
    username.value = ''
    token.value = ''
  }

  return { username, token, reset, isLogin }
},
{
  persist: true,
})
