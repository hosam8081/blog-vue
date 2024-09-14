<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Import your layout components
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'

// Define a mapping from layout names to components
const layoutComponents = {
  DashboardLayout,
}

const route = useRoute()

// Dynamically select the layout component based on the route's meta layout
const layoutComponent = computed(() => {
  const layout = route.meta.layout || 'DashboardLayout'
  return layoutComponents[layout] || DashboardLayout
})
</script>
