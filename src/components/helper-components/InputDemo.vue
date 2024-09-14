<template>
  <Label v-if="label" :class="labelClass">
    {{ label }}
  </Label>

  <Input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :class="inputClass"
    @input="$emit('update:modelValue', $event.target.value)"
  />

  <p v-if="error" className="text-[#d32f2f] text-xs m-[4px_14px_0] font-normal">
    {{ error }}
  </p>
</template>

<script setup>
import { computed } from "vue";
import Input from "../ui/input/Input.vue";

// Define the component's props
const props = defineProps({
  label: {
    type: String,
  },
  error: {
    type: String,
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: String,
  type: String,
  class: String,
});

console.log(props);

const inputClass = computed(() => {
  return props.error ? "border-[#d32f2f]" : "";
});

const labelClass = computed(() => {
  return `block mb-2 font-normal text-sm ${
    props.error ? "text-[#d32f2f]" : ""
  }`;
});
</script>
