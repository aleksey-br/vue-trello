<template>
  <div>
    <label
      v-if="label"
      class="block font-light text-sm text-slate-700 mb-2"
      for="input"
      >{{ label }}:</label
    >
    <input
      :type="inputType"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-3 py-1 border border-slate-400 outline-none rounded" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  label: {
    type: String,
    default: "Label",
  },
  inputType: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Text",
  },
  modelValue: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
