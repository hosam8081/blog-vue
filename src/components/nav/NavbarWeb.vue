<script setup>
import { CircleUser, Search } from 'lucide-vue-next'
import { IButton } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { InputUI } from '@/components/ui/input'
import NavInMobile from '@/components/nav/NavInMobile.vue'
import ToggleMode from '@/components/helper-components/ToggleMode.vue'
</script>
<template>
    <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <NavInMobile />
      <div class="w-full flex-1">
        <form>
          <div class="relative">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <InputUI type="search" placeholder="Search products..."
              class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
          </div>
        </form>
      </div>
      <ToggleMode />
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <IButton variant="secondary" size="icon" class="rounded-full">
            <CircleUser class="h-5 w-5" />
            <span class="sr-only">Toggle user menu</span>
          </IButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
</template>