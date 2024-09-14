
<script setup>

import SideBar from '@/components/nav/SideBar.vue'
import NavbarWeb from '@/components/nav/NavbarWeb.vue'
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr]">
    <SideBar />
    <div class="flex flex-col">
      <NavbarWeb />
      <div>
        <router-view></router-view> <!-- Render the page content here -->
      </div>
    </div>
  </div>
</template>