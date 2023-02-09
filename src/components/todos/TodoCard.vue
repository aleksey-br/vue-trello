<template>
  <SlickItem
    class="p-2 rounded-md text-[#323232] shadow-md bg-slate-200 flex justify-between">
    <DragHandle class="grow" tag="div">
      <h5 class="mb-2 font-semibold text-lg">{{ item.title }}</h5>
      <p
        class="descr__text text-sm text-gray-800 line-clamp-3 pointer-events-none">
        {{ item.descr }}
      </p>
    </DragHandle>
    <div @click="todosStore.deleteTask(item)">
      <AppIcons
        class="cursor-pointer fill-slate-700 hover:fill-red-600 transition"
        name="trash"
        w="25px"
        h="25px" />
    </div>
  </SlickItem>
</template>

<script setup>
import { DragHandle } from "vue-slicksort";
import { useTodosStore } from "@/store";
import { defineProps } from "vue";
import { SlickItem } from "vue-slicksort";
import AppIcons from "../ui/AppIcons.vue";

const todosStore = useTodosStore();
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
