<template>
  <AppHeader />
  <router-view />
  <modals-container></modals-container>
</template>

<script setup>
import { onMounted } from "vue";
import AppHeader from "./components/AppHeader.vue";
import { ModalsContainer } from "vue-final-modal";
import { useTodosStore } from "./store";

const todosStore = useTodosStore();
</script>

<style></style>
