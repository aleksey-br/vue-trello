<template>
  <div
    v-if="todosStore.boards.length === 0"
    class="w-full h-full flex items-center justify-center flex-col">
    <h1 class="text-5xl font-bold text-slate-700 mb-3">
      Hello, {{ userName }} 👋
    </h1>
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
      ref="input"
      @keyup.enter="nameBoard"
      required />

    <button
      @click="nameBoard"
      class="px-20 py-3 bg-blue-700 rounded-md text-slate-100 font-medium text-md hover:bg-slate-800 transition">
      Add board
    </button>
  </div>

  <SlickList
    v-else
    class="content flex h-full relative items-start overflow-y-hidden overflow-x-auto scroll-touch"
    axis="x"
    lockAxis="x"
    v-model:list="todosStore.boards"
    @update:list="todosStore.startDraggingBoard"
    use-drag-handle
    :useWindowAsScrollContainer="false"
    :transition-duration="500">
    <TodoBoard />
    <div
      class="bg-slate-200/60 hover:bg-slate-200/80 flex flex-shrink-0 px-4 py-2 text-2xl transition rounded-md relative">
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
import { ref, onMounted, computed } from "vue";
import { SlickList } from "vue-slicksort";
import TodoBoard from "@/components/todos/TodoBoard.vue";
import { useAuthStore, useTodosStore } from "@/store";

const todosStore = useTodosStore();
const boardName = ref("");
const input = ref(null);
const userName = ref("User");
const isInputShow = ref(false);

onMounted(() => {
  userName.value =
    userName.value.charAt(0).toUpperCase() + userName.value.slice(1);
});

const showInput = () => {
  isInputShow.value = !isInputShow.value;
};

const nameBoard = () => {
  todosStore.createBoard(boardName.value);
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
