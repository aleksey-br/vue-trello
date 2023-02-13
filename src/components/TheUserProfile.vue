<template>
  <div class="w-full min-h-[260px] bg-white rounded-md px-3 py-4">
    <div>
      <label class="font-light text-sm text-slate-700 mb-3 block" for="name"
        >Your name:</label
      >
      <div class="flex gap-3 relative">
        <h5
          v-show="!isNameChange"
          class="max-w-[90%] text-3xl font-bold text-slate-600 overflow-hidden text-ellipsis">
          {{ userName }}
        </h5>
        <button
          v-show="!isNameChange"
          class="border-none bg-transparent outline-none"
          @click="handleChangeName">
          <AppIcons name="pen" w="20px" h="20px" />
        </button>
        <div
          v-if="isNameChange"
          class="absolute top-0 left-0 flex gap-3 flex-wrap bg-white">
          <input
            class="h-8 border-b border-b-2 border-slate-300 outline-none text-slate-700 font-medium text-lg"
            id="name"
            type="text"
            :value="userName"
            ref="input" />
          <button
            class="outline-none text-slate-600 hover:text-red-500 transition"
            @click="handleCancel">
            Cancel
          </button>
          <button
            class="outline-none text-slate-600 hover:text-green-600 transition"
            @click="changeName">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import AppIcons from "./ui/AppIcons.vue";
import { useAuthStore } from "@/store";

const authStore = useAuthStore();
const vfm = inject("$vfm");
const userName = ref("user");
const input = ref(null);
const bg = ref("");
const isNameChange = ref(false);

onMounted(() => {
  userName.value = authStore.getUserName;
});

const handleChangeName = () => {
  isNameChange.value = !isNameChange.value;
};
const handleCancel = () => {
  isNameChange.value = false;
};

const changeName = (e) => {
  const oldName = userName.value;
  userName.value = input.value.value.trim();
  if (oldName !== userName.value) {
    authStore.changeName(userName.value);
    isNameChange.value = false;
    vfm.hide("header-modal");
  }
};
</script>

<style lang="scss" scoped></style>
