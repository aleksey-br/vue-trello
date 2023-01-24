<template>
  <footer
    class="bg-stone-200 absolute bottom-0 left-0 right-0 p-4 rounded-md transition">
    <Transition name="form-fade">
      <div class="w-full p-4 bg-stone-200" v-if="isShowForm">
        <label class="block font-light text-sm mb-1" for="title">Title</label>
        <input
          class="block w-full py-1 px-2 outline-none text-gray-800 rounded-md mb-4"
          type="text"
          name="title"
          id="title" />
        <label class="block font-light text-sm mb-1" for="descr"
          >Description</label
        >
        <textarea
          class="block w-full py-1 px-2 mb-4 outline-none text-gray-800 rounded-md resize-none"
          name="descr"
          id="descr"
          cols="30"
          rows="5">
        </textarea>
      </div>
    </Transition>
    <button
      class="w-full px-4 py-2 bg-green-500 rounded-md text-center text-stone-50 shadow-md hover:bg-green-600 transition-colors duration-200"
      @click="showForm">
      {{ isShowForm ? "Save" : "Add" }}
    </button>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const isShowForm = ref(false);

const showForm = () => {
  isShowForm.value = !isShowForm.value;

  console.log(isShowForm.value);
};
</script>

<style lang="css" scoped>
.form-fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.form-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.form-fade-enter, .form-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(20px);
  opacity: 0;
}
</style>
