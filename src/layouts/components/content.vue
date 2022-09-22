<script setup lang="ts">
const route = useRoute()
const activeTitle = computed(() => {
  return route.meta.title
})
</script>

<template>
  <n-layout :native-scrollbar="false">
    <div p-3>
      <n-h2>{{ activeTitle }}</n-h2>
      <router-view />
    </div>
  </n-layout>
</template>
