<template>
  <footer class="bg-slate-200/10 p-4 rounded-md transition">
    <transition name="fade">
      <div class="w-full bg-slate-200/10" v-if="isShowForm">
        <label class="block font-light text-sm mb-1" for="title">Title</label>
        <input
          class="peer mt-1 block w-full px-3 py-2 mb-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="text"
          placeholder="Task one"
          name="title"
          id="title"
          v-model.trim="formData.title"
          required />
        <label class="block font-light text-sm mb-1" for="descr"
          >Description</label
        >
        <textarea
          class="mt-1 block w-full px-3 py-2 mb-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:invalid:border-red-500 focus:invalid:ring-red-500 resize-none"
          name="descr"
          id="descr"
          placeholder="Hello world"
          cols="30"
          rows="5"
          v-model.trim="formData.descr"
          required>
        </textarea>
      </div>
    </transition>
    <button
      class="w-full px-4 py-2 bg-green-600 rounded-md text-center text-stone-50 shadow-md hover:bg-green-700 transition-colors duration-200 outline-none"
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
  col: String,
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
    if (formData.descr && formData.title) {
      todosStore.createTask(formData);
      formData.title = "";
      formData.descr = "";
    }
  }
};
</script>

<style lang="css" scoped></style>
