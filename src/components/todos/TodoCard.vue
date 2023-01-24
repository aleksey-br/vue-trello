<template>
  <SlickItem class="p-2 rounded-md text-[#323232] shadow-md bg-slate-200">
    <h5 class="mb-2 font-semibold text-lg">{{ item.title }}</h5>
    <p class="descr__text text-sm text-gray-800">
      {{ item.descr }}
    </p>
  </SlickItem>
</template>

<script setup>
import { defineProps } from "vue";
import { SlickItem } from "vue-slicksort";

const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
