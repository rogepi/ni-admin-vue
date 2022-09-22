export const useGlobalStore = defineStore('global', () => {
  const collapsed = ref(false)

  return { collapsed }
},
{
  persist: true,
},
)
