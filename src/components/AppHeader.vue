<template>
  <header class="h-14 bg-slate-200/80 fixed top-0 left-0 right-0">
    <div
      class="container mx-auto px-4 h-full flex items-center justify-between">
      <h3 class="text-3xl text-slate-800 font-extrabold">Vuello</h3>
      <button
        v-if="user"
        class="px-6 py-2 bg-blue-700 rounded-md text-slate-100 outline-none"
        @click="authStore.logout">
        Sing Out
      </button>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/store";
import { useCurrentUser } from "vuefire";

const authStore = useAuthStore();
const user = useCurrentUser();
</script>

<style lang="scss" scoped></style>
