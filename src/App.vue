<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <Provider>
              <!-- main content -->
              <component :is="Component" />
            </Provider>
            <!-- loading state -->
            <template #fallback>
              <n-spin size="small" />
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>
