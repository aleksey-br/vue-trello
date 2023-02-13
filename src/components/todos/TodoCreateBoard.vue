<template>
  <div class="bg-white px-3 py-4 rounded-md">
    <BaseInput
      v-model="boardName"
      class="w-full block mb-4"
      label="New board" />
    <BaseButton class="mr-6" @click="createBoard">Add board</BaseButton>
    <BaseButton
      class="bg-red-500 hover:bg-red-600"
      @click="vfm.hide('header-create-board')"
      >Close</BaseButton
    >
  </div>
</template>

<script setup>
import { useTodosStore } from "@/store";
import { ref, inject } from "vue";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";

const todoStore = useTodosStore();
const boardName = ref("");
const vfm = inject("$vfm");

const createBoard = () => {
  if (boardName.value.length !== 0) {
    todoStore.createBoard(boardName.value);
    boardName.value = "";
    vfm.hide("header-create-board");
  }
};
</script>

<style lang="scss" scoped></style>
