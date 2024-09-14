<script setup>
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { BASEURL } from '@/data/Apis';
import { ValuesToFormData } from '@/lib/utils';


import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';


const MAX_FILE_SIZE = 15 * 1024 * 1024; // 5MB

const schema = yup.object({
  title: yup.string().required('Title is required'),
  content: yup.string().required('content is required'),
  image: yup.mixed()
    .required('Image is required')
    .test('fileType', 'Only image files are allowed', value => value && value.type.startsWith('image/'))
    .test('fileSize', 'File size must be less than 15MB', value => value && value.size <= MAX_FILE_SIZE),

});

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});


const { value: title } = useField('title');
const { value: content } = useField('content');
const { value: image } = useField('image');
const imagePerview = ref(null)


// -------- Methods ----------
function onFileChange(event) {
  const file = event.target.files[0];
  console.log(file)
  if (file && file.type.startsWith('image/')) {
    image.value = file;
    imagePerview.value = URL.createObjectURL(file);
  }
}


const onSubmit = handleSubmit(values => {
  console.log('Form Submitted', values);
  const newValues = ValuesToFormData(values)
  try {

    fetch(`${BASEURL}/post`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: newValues,
    })

    alert('Form submitted successfully!');
    resetForm();
    imagePerview.value = ''; // Clear image preview separately

  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit form. Please try again.');
  }

});

</script>
<template>
  <div className="container">
    <form @submit.prevent="onSubmit" class="mt-3">
      <div className="flex flex-col gap-3">
        <div>
          <Input type="text" v-model="title" placeholder="title" label="title" />
          <span class="text-red-600 text-sm">{{ errors.title }}</span>
        </div>
        <div>
          <Input type="text" v-model="content" placeholder="content" label="content" />
          <span class="text-red-600 text-sm">{{ errors.content }}</span>
        </div>
        <div>
          <Input type="file" @change="onFileChange" placeholder="file" label="file" />
          <span class="text-red-600 text-sm">{{ errors.image }}</span>
          <!-- Image Preview -->
           <div v-if="imagePerview" class="mt-5">
             <img :src="imagePerview" alt="Preview" class="w-32 h-32 object-cover" />
           </div>

        </div>
        <div>
          <Button type="submit">Add Blog</Button>
        </div>
      </div>
    </form>
  </div>
</template>