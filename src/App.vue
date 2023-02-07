<template>
  <AppHeader />
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import AppHeader from "./components/AppHeader.vue";
import { useTodosStore } from "./store";

const todosStore = useTodosStore();

onMounted(() => {
  todosStore.getDataforFirestore();
});
</script>

<style></style>
