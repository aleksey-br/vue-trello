<template>
  <footer class="bg-stone-200 p-4 rounded-md transition">
    <transition name="fade">
      <div class="w-full bg-stone-200" v-if="isShowForm">
        <label class="block font-light text-sm mb-1" for="title">Title</label>
        <input
          class="block w-full py-1 px-2 outline-none text-gray-800 rounded-md mb-4"
          type="text"
          placeholder="Task one"
          name="title"
          id="title"
          v-model="formData.title" />
        <label class="block font-light text-sm mb-1" for="descr"
          >Description</label
        >
        <textarea
          class="block w-full py-1 px-2 mb-4 outline-none text-gray-800 rounded-md resize-none"
          name="descr"
          id="descr"
          placeholder="Hello world"
          cols="30"
          rows="5"
          v-model="formData.descr">
        </textarea>
      </div>
    </transition>
    <button
      class="w-full px-4 py-2 bg-green-500 rounded-md text-center text-stone-50 shadow-md hover:bg-green-600 transition-colors duration-200"
      @click="showForm">
      {{ isShowForm ? "Save" : "Add" }}
    </button>
  </footer>
</template>

//FIXME: Разобраться с анимацией появления формы, с появлением формы на элементе

<script setup>
import { ref, reactive, defineProps } from "vue";
import { useTodosStore } from "@/store";

const todosStore = useTodosStore();
const props = defineProps({
  col: Number,
});

const isShowForm = ref(false);
const formData = reactive({
  column: props.col,
  title: "",
  descr: "",
});

const showForm = () => {
  isShowForm.value = !isShowForm.value;

  if (!isShowForm.value) {
    todosStore.createTask(formData);

    formData.title = "";
    formData.descr = "";
  }
};
</script>

<style lang="css" scoped></style>
