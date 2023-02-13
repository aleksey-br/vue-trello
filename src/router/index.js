import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/TodosPage.vue"),
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();
    // if the user is not logged in, redirect to the login page
    // console.log(currentUser);
    if (!currentUser) {
      return {
        path: "/auth",
        query: {},
      };
    }
  }
});

export default router;
