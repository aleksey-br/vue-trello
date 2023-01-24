<template>
  <div
    v-if="todosStore.getTodos.length === 0"
    class="w-full h-full flex items-center justify-center flex-col">
    <h1 class="text-5xl font-bold text-slate-700 mb-3">Hello, Name 👋</h1>
    <h3 class="text-3xl font-semibold text-slate-700 mb-5">
      It's time for new challenges
    </h3>
    <input
      class="w-[300px] h-10 outline-none px-2 py-1 rounded-md text-slate-800 font-md mb-4"
      v-model="boardName"
      type="text"
      name="title"
      id="board-title"
      placeholder="Board name"
      @keyup.enter="nameBoard"
      ref="input"
      v-if="isInputShow" />
    <button
      @click="showInput"
      v-if="!isInputShow"
      class="px-20 py-3 bg-slate-600 rounded-md text-slate-100 font-medium text-lg hover:bg-slate-800 transition">
      Add board
    </button>
  </div>
  <SlickList
    v-else
    class="content flex h-full relative items-start overflow-y-hidden overflow-x-auto scroll-touch"
    axis="x"
    lockAxis="x"
    v-model:list="todosStore.todos"
    @sort-start="todosStore.startDragging"
    use-drag-handle
    :useWindowAsScrollContainer="false"
    :transition-duration="500">
    <TodoBoard />
    <div
      class="bg-stone-200 flex flex-shrink-0 px-4 py-2 text-2xl transition rounded-md relative min-h-[40px]">
      <input
        class="w-full outline-none px-2 py-1 rounded-md text-slate-800 font-md"
        v-model="boardName"
        type="text"
        name="title"
        id="board-title"
        placeholder="Board name"
        @keyup.enter="nameBoard"
        ref="input"
        v-if="isInputShow" />
      <button v-if="!isInputShow" @click="showInput">
        <span>+</span>
      </button>
    </div>
  </SlickList>
</template>

<script setup>
import { ref } from "vue";
import { SlickList } from "vue-slicksort";
import TodoBoard from "@/components/todos/TodoBoard.vue";
import { useTodosStore } from "@/store";

const todosStore = useTodosStore();
const boardName = ref("");
const input = ref(null);
const isInputShow = ref(false);
console.log(todosStore.getTodos.length);
const showInput = () => {
  isInputShow.value = !isInputShow.value;
  // input.value.focus();
  // console.log(input.value);
  // input.value.scrollIntoView(true);
};

const nameBoard = () => {
  console.log(boardName.value);
  todosStore.createBoard(boardName.value);
  isInputShow.value = false;
  boardName.value = "";
};
</script>

<style lang="css" scoped>
.content::-webkit-scrollbar {
  height: 8px;
}
.content::-webkit-scrollbar-track {
  background: #f7f7f744;
  border-radius: 8px;
}
.content::-webkit-scrollbar-thumb {
  background: #afafaf;
  border-radius: 8px;
}
.content::-webkit-scrollbar-thumb:hover {
  background: #7c7c7c;
  border-radius: 8px;
}
</style>
