<script setup lang="ts">
const router = useRouter()
const toHome = () => {
  router.push({ name: 'index' })
}
</script>

<template>
  <n-layout-header h-16 p-3 px-6 center justify-between bordered>
    <div flex items-end cursor-pointer @click="toHome">
      <Logo />
    </div>
    <div center gap-5>
      <ThemeSwitch />
      <n-avatar round>
        {{ 'user' }}
      </n-avatar>
    </div>
  </n-layout-header>
</template>
