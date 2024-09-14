<script setup>
import { MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { IButton } from '@/components/ui/button'

const props = defineProps({
  onChange: {
    type: Function,
    required: true
  },
  onDelete: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <IButton variant="ghost" class="h-8 w-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="h-4 w-4" />
      </IButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuItem @click="props.onChange()">Edit</DropdownMenuItem>
      <DropdownMenuItem @click="props.onDelete()">Delete</DropdownMenuItem>
      <DropdownMenuSeparator />

    </DropdownMenuContent>
  </DropdownMenu>
</template>
