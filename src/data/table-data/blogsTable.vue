<script setup>
import { h, ref, watch  } from 'vue'
import { RouterLink } from 'vue-router';

import { Search } from 'lucide-vue-next';
import { BASEURL } from '../Apis';

import DropdownAction from '@/components/helper-components/DropdownAction.vue';
import ReusableTable from '@/components/helper-components/TableData.vue'

import Input from '@/components/ui/input/Input.vue';
import Button from '@/components/ui/button/Button.vue';

import { useFetch } from '@/composables/useFetch';
import { useDelete } from '@/composables/useDelete';

const search = ref("")

//-------- Define columns --------
const columns = [
  {
    accessorKey: '_id',
    header: 'id',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('_id')),
  },
  // {
  //   accessorKey: 'image',
  //   header: 'Image',
  //   cell: ({ row }) => h('img', {
  //     src: row.getValue('image'),
  //     alt: row.getValue('title'),
  //     class: 'your-image-class',
  //     style: { width: '50px', height: '50px' } // Adjust the size as needed
  //   }),
  // },

  {
    accessorKey: 'title',
    header: 'title',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('title')),
  },
  {
    accessorKey: 'content',
    header: 'content',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('content')),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original._id
      return h('div', { class: 'relative' }, h(DropdownAction, {
        onChange: () => handleChange(id),
        onDelete: () => handleDelete(id),
      }))
    },
  },

]

// ---------- MOUNTED && MUTATION ----------
const {data, fetchData} = useFetch(`${BASEURL}/post`)
const { deleteResource } = useDelete();

// -------- Watcher for search --------
watch(search, (newSearch) => {
  fetchData(`${BASEURL}/post?search=${newSearch}`,);
});

// ------------ Methods ---------
function handleChange(id) {
  console.log('Change action triggered for:', id);
}

async function handleDelete(id) {
  await deleteResource(`${BASEURL}/post/${id}`);
}

</script>

<template>
  <div>
    <div class="flex gap-2 mb-3">
      <form class="flex-1">
        <div class="relative">
          <Search  class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input v-model="search" type="search" placeholder="Search blogs..."
            class="w-full appearance-none bg-background pl-8 shadow-none " />
        </div>
      </form>
      <Button as-child>
        <RouterLink to="/dashboard/blog/add">Add New Blog</RouterLink>
      </Button>
    </div>
    <ReusableTable v-if="data?.results?.length > 0" :columns="columns" :data="data.results" />
  </div>
</template>