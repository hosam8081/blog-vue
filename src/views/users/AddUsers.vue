<script setup>
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { BASEURL } from '@/data/Apis';


import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';


const schema = yup.object({
  // firstName: yup.string().required('first name is required'),
  // lastName: yup.string().required('last name is required'),
  username: yup.string().required('username is required'),
  email: yup.string().required('email is required'),
  password: yup.string().required('password is required')
});

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
});


// const { value: firstName } = useField('firstName');
// const { value: lastName } = useField('lastName');
const { value: username } = useField('username');
const { value: password } = useField('password');
const { value: email } = useField('email');



const onSubmit = handleSubmit(async values => {
  try {

    const response = await fetch(`${BASEURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      // If response status is not OK (e.g., 400 or 500), throw an error
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message || response.statusText}`);
    }

    alert('Form submitted successfully!');
    resetForm();

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
        <!-- <div>
          <Input type="text" v-model="firstName" placeholder="firstName" label="firstName" />
          <span class="text-red-600 text-sm">{{ errors.firstName }}</span>
        </div>
        <div>
          <Input type="text" v-model="lastName" placeholder="lastName" label="lastName" />
          <span class="text-red-600 text-sm">{{ errors.lastName }}</span>
        </div> -->
        <div>
          <Input type="text" v-model="username" placeholder="username" label="username" />
          <span class="text-red-600 text-sm">{{ errors.username }}</span>
        </div>
        <div>
          <Input type="email" v-model="email" placeholder="email" label="email" />
          <span class="text-red-600 text-sm">{{ errors.email }}</span>
        </div>
        <div>
          <Input type="password" v-model="password" placeholder="password" label="password" />
          <span class="text-red-600 text-sm">{{ errors.password }}</span>
        </div>
        <div>
          <Button type="submit">Add Blog</Button>
        </div>
      </div>
    </form>
  </div>
</template>