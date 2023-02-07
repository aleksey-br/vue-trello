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
        query: {
          // we keep the current path in the query so we can redirect to it after login
          // with `router.push(route.query.redirectTo || '/')`
          // redirectTo: to.fullPath,
        },
      };
    }
  }
});

export default router;
