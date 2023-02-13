<template>
  <div
    v-if="todosStore.boards.length === 0"
    class="w-full h-full flex items-center justify-center flex-col">
    <h1 v-if="userName" class="text-5xl font-bold text-slate-700 mb-3">
      Hello, {{ userName }} 👋
    </h1>
    <span v-else class="loader"></span>
    <h3 class="text-3xl font-semibold text-slate-700 mb-5">
      It's time for new challenges
    </h3>
    <input
      class="peer w-[300px] h-10 outline-none px-2 py-1 mb-2 rounded-md text-slate-800 font-md"
      v-model.trim="boardName"
      type="text"
      name="title"
      id="board-title"
      placeholder="Board name"
      ref="input"
      @keyup.enter="nameBoard"
      required />
    <span
      class="invisible peer-invalid:visible text-red-600 font-light text-sm peer-invalid:mb-2">
      Board name not available</span
    >

    <button
      @click="nameBoard"
      class="px-20 py-3 bg-blue-600 rounded-md text-slate-100 font-medium text-md hover:bg-blue-700 transition peer-invalid:opacity-50 peer-invalid:bg-blue-600">
      Add board
    </button>
  </div>

  <SlickList
    v-else
    class="content flex h-full relative items-start overflow-y-hidden overflow-x-auto scroll-touch"
    axis="xy"
    lockAxis="xy"
    v-model:list="todosStore.boards"
    @update:list="todosStore.startDraggingBoard"
    use-drag-handle
    :useWindowAsScrollContainer="false"
    :transition-duration="500">
    <TodoBoard />
  </SlickList>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { SlickList } from "vue-slicksort";
import TodoBoard from "@/components/todos/TodoBoard.vue";
import { useAuthStore, useTodosStore } from "@/store";

const todosStore = useTodosStore();
const authStore = useAuthStore();
const boardName = ref(null);
const input = ref(null);

onMounted(async () => {
  await authStore.getUserData();
  todosStore.getDataforFirestore();
});

const userName = computed(() => {
  return (
    authStore.user?.name.charAt(0).toUpperCase() + authStore.user?.name.slice(1)
  );
});

const nameBoard = () => {
  if (boardName.value.length !== 0) {
    todosStore.createBoard(boardName.value);
    boardName.value = "";
  }
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

.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 32px 0 #fff, -32px 0 #fff;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #fff2;
    box-shadow: 32px 0 #fff2, -32px 0 #fff;
  }
  50% {
    background-color: #fff;
    box-shadow: 32px 0 #fff2, -32px 0 #fff2;
  }
  100% {
    background-color: #fff2;
    box-shadow: 32px 0 #fff, -32px 0 #fff2;
  }
}
</style>
