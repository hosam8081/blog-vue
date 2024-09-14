<script setup>
import { Home,  Menu, Package2, Users } from 'lucide-vue-next'
import { IButton } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

</script>
<template>
        <Sheet>
        <SheetTrigger as-child>
          <IButton variant="outline" size="icon" class="shrink-0 md:hidden">
            <Menu class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </IButton>
        </SheetTrigger>
        <SheetContent side="left" class="flex flex-col">
          <nav class="grid gap-2 text-lg font-medium">
            <a href="#" class="flex items-center gap-2 text-lg font-semibold">
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a href="/dashboard/blogs"
              class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
              <Home class="h-5 w-5" />
              Blogs
            </a>
            <a href="/dashboard/users"
              class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
              <Users class="h-5 w-5" />
              Users
            </a>
          </nav>
        </SheetContent>
      </Sheet>
</template>