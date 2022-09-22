<script setup lang="ts">
import LayoutHeader from './components/header.vue'
import LayoutSider from './components/sider.vue'
import LayoutContent from './components/content.vue'
import LayoutFooter from './components/footer.vue'
</script>

<template>
  <n-layout h-screen :native-scrollbar="false">
    <LayoutHeader />

    <n-layout absolute top-16 bottom-16 has-sider>
      <LayoutSider />
      <n-layout :native-scrollbar="false">
        <LayoutContent />
      </n-layout>
    </n-layout>

    <LayoutFooter />
  </n-layout>
</template>

