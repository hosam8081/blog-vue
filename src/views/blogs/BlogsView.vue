<script setup>
import BlogsTable from '@/data/table-data/blogsTable.vue';
</script>

<template>
  <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div class="flex items-center">
      <h1 class="text-lg font-semibold md:text-2xl">
        Blog
      </h1>
    </div>
    <BlogsTable />
  </main>
</template>