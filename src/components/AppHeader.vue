<template>
  <header class="h-14 bg-slate-200/80 fixed top-0 left-0 right-0 z-50">
    <div class="container mx-auto px-4 h-full flex items-center">
      <h3 class="text-3xl text-slate-800 font-extrabold mr-auto">Vuello</h3>
      <button
        v-if="todoStore.boards.length"
        class="px-4 py-2 bg-blue-700 rounded-md text-white text-sm mr-10"
        @click="handleAddBoard">
        Add board
      </button>
      <Popper arrow v-if="user">
        <button class="outline-none">
          <AppIcons class="fill-slate-700" name="settings" w="35px" h="35px" />
        </button>
        <template #content="{}">
          <div class="bg-white p-4 rounded-md">
            <button class="flex gap-2 text-slate-700" @click="showUserProfile">
              <span><AppIcons name="user" w="20px" h="20px" /></span> Profile
            </button>
            <button class="flex gap-2 text-slate-700" @click="authStore.logout">
              <span><AppIcons name="singOut" w="20px" h="20px" /></span> Sing
              Out
            </button>
          </div>
        </template>
      </Popper>
    </div>
  </header>
</template>

<script setup>
import { inject } from "vue";
import { useAuthStore, useTodosStore } from "@/store";
import { useCurrentUser } from "vuefire";
import Popper from "vue3-popper";
import AppIcons from "./ui/AppIcons.vue";
import TodoCreateBoard from "@/components/todos/TodoCreateBoard.vue";

import AppModal from "@/components/AppModal.vue";
import TheUserProfile from "./TheUserProfile.vue";

const vfm = inject("$vfm");
const authStore = useAuthStore();
const todoStore = useTodosStore();
const user = useCurrentUser();

const showUserProfile = () => {
  vfm.show({
    component: AppModal,
    bind: {
      name: "header-modal",
    },
    slots: {
      default: {
        component: TheUserProfile,
      },
    },
  });
};

const handleAddBoard = () => {
  vfm.show({
    component: AppModal,
    bind: {
      name: "header-create-board",
    },
    slots: {
      default: {
        component: TodoCreateBoard,
      },
    },
  });
};
</script>

<style lang="scss" scoped></style>
