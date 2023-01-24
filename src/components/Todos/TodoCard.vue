<template>
  <SlickItem class="bg-slate-200 p-2 rounded-md text-[#323232] shadow-md">
    <h5 class="mb-2 font-semibold text-lg">{{ item.title }}</h5>
    <p class="descr__text mb-4 text-sm text-gray-800">
      {{ item.descr }}
    </p>
    <div class="flex justify-between text-xs text-gray-500">
      <span
        >Create:<time class="ml-2">{{ item.create_date }}</time></span
      ><span
        >Deadline: <time class="ml-2">{{ item.release_date }}</time></span
      >
    </div>
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
