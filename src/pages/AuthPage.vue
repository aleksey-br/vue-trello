<template>
  <div
    class="flex flex-col h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <h3 class="text-3xl font-bold text-slate-800">
      {{ isRegistration ? "Registration" : "Authorization" }}
    </h3>

    <div class="w-full max-w-md space-y-8 mb-5">
      <form class="mt-8 space-y-6" @submit.prevent>
        <div class="-space-y-px rounded-md shadow-sm">
          <div v-if="isRegistration">
            <label for="name" class="sr-only">Name</label>
            <input
              v-model="user.name"
              id="name"
              name="name"
              type="text"
              autocomplete="off"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
              placeholder="Your name" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="user.email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="off"
              required
              class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-2"
              :class="{ 'rounded-t-md': !isRegistration }"
              placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              autocomplete="off"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>

        <div>
          <button
            @click="submitForm"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <!-- Heroicon name: mini/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
    <div class="flex gap-4">
      <button @click="isRegistration = false">Log in</button>
      <button
        @click="isRegistration = true"
        class="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md">
        Sing Up
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store";
import { ref } from "vue";

const authStore = useAuthStore();
const isRegistration = ref(false);
const user = ref({
  name: "",
  email: "",
  password: "",
});

const submitForm = () => {
  if (isRegistration.value) {
    authStore.register(user.value);
  } else {
    authStore.login(user.value);
  }
};
</script>

<style lang="scss" scoped></style>
