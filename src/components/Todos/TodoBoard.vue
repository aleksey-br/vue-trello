<template>
  <SlickItem
    class="w-[380px] h-auto p-4 flex flex-col mr-4 last:mr-0 bg-stone-200 bg-opacity-80 shadow-md rounded-md scroll-touch relative"
    v-for="(colum, i) in columns"
    :key="colum.id"
    :index="i">
    <!-- <div class="relative h-auto p-4 flex flex-col mr-4"> -->
    <header class="flex justify-between items-center mb-4">
      <span class="text-xl font-medium text-gray-700">{{ colum.name }}</span>
      <DragHandle class="cursor-grabbing">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
            fill="#334155" />
          <path
            d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
            fill="#334155" />
          <path
            d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
            fill="#334155" />
        </svg>
      </DragHandle>
    </header>
    <SlickList
      class="board flex flex-col gap-4 transition-all pb-14 pr-2 overflow-y-scroll mb-4"
      v-model:list="colum.items"
      axis="y"
      group="group"
      tag="div"
      :useWindowAsScrollContainer="false"
      :transition-duration="500">
      <TodoCard
        v-for="(item, i) in colum.items"
        :key="item.id"
        :index="i"
        :item="item" />
    </SlickList>
    <footer class="bg-stone-200 absolute bottom-0 left-0 right-0">
      <div
        v-if="!isShowForm"
        class="absolute w-full bottom-0 left-0 right-0 p-4">
        <button
          class="w-full px-4 py-2 bg-green-500 rounded-md text-center text-stone-50 shadow-md hover:bg-green-600 transition-colors duration-200"
          @click="addTask">
          Add task
        </button>
      </div>
    </footer>
    <!-- </div> -->
  </SlickItem>
</template>

<script setup>
import { SlickItem, DragHandle, SlickList } from "vue-slicksort";
import { defineProps, ref } from "vue";
import TodoCard from "./TodoCard.vue";
// import TodoCreateTask from "./TodoCreateTask.vue";

const isShowForm = ref(false);
const props = defineProps({
  columns: Array,
});

const addTask = () => {
  isShowForm.value = !isShowForm.value;
  console.log("aaa");
};
</script>

<style lang="css" scoped>
.board::-webkit-scrollbar {
  width: 8px;
}
.board::-webkit-scrollbar-track {
  background: #f7f7f765;
  border-radius: 8px;
}
.board::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 8px;
}
</style>
