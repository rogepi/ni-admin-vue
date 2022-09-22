<script setup lang="ts">
const router = useRouter()
const toHome = () => {
  router.push({ name: 'index' })
}
</script>

<template>
  <n-layout-header h-16 p-3 px-6 bordered>
    <div flex items-end cursor-pointer @click="toHome">
      <Logo />
    </div>
  </n-layout-header>
</template>
