<template>
  <SlickItem
    class="w-[380px] max-h-[640px] h-min flex flex-shrink-0 flex-col mr-4 last:mr-0 shadow-md rounded-md scroll-touch"
    v-for="(colum, i) in todosStore.getData"
    :key="colum.id"
    :index="i">
    <div
      class="relative h-full flex flex-col overflow-hidden bg-slate-200/70 hover:bg-slate-200/80 transition">
      <header class="flex justify-between items-center p-4">
        <span class="w-full text-xl font-medium text-gray-700">{{
          colum.name
        }}</span>
        <div @click="todosStore.deleteBoard(colum)">
          <AppIcons
            class="mr-4 cursor-pointer fill-slate-600 hover:fill-red-600 transition"
            name="trash"
            w="30px"
            h="30px" />
        </div>
        <DragHandle class="cursor-grabbing">
          <AppIcons name="burger" />
        </DragHandle>
      </header>
      <SlickList
        class="board flex flex-col gap-4 transition-all p-4 overflow-y-auto relative"
        v-model:list="colum.items"
        axis="y"
        group="group"
        tag="div"
        @sort-insert="todosStore.changeProgress($event, colum)"
        :useWindowAsScrollContainer="false"
        use-drag-handle
        :transition-duration="500">
        <TransitionGroup name="list">
          <TodoCard
            v-for="(item, i) in colum.items"
            :key="item.id"
            :index="i"
            :item="item" />
        </TransitionGroup>
      </SlickList>
      <TodoBoardFooter :col="colum.id" />
    </div>
  </SlickItem>
</template>

<script setup>
import { SlickItem, DragHandle, SlickList } from "vue-slicksort";
import TodoCard from "./TodoCard.vue";
import TodoBoardFooter from "./TodoBoardFooter.vue";
import { useTodosStore } from "@/store";
import AppIcons from "@/components/ui/AppIcons.vue";

const todosStore = useTodosStore();
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

/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: scale(0.8);
}
</style>
