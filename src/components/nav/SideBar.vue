<script setup>
import { Home, Package2, Users } from 'lucide-vue-next'


</script>


<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <Package2 class="h-6 w-6 text-primary" />
          <span class="text-primary">Blog Admin</span>
        </a>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <a href="/dashboard/blogs"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Home class="h-4 w-4" />
            blogs
          </a>
          <a href="/dashboard/users"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <Users class="h-4 w-4" />
            users
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>