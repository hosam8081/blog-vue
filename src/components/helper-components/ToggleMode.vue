<script setup>
import { useColorMode } from '@vueuse/core'
// import { Icon } from '@iconify/vue'
import { IButton } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-vue-next'

// Pass { disableTransition: false } to enable transitions
const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <IButton variant="outline">

        <Moon v-if="mode === 'light'" :size="20"/>
        <Sun v-else :size="20"/>
        <span class="sr-only">Toggle theme</span>
      </IButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem @click="mode = 'light'">
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>