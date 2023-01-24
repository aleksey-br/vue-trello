import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/TodosPage.vue"),
  },
  {
    path: "/auth",
    component: () => import("@/pages/AuthPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
