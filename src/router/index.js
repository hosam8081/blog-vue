import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/dashboard/blogs/",
      name: "blogs",
      component: () => import("../views/blogs/BlogsView.vue"),
      meta: {
        layout: "DashboardLayout",
      },
    },
    {
      path: "/dashboard/blog/add",
      name: "addblogs",
      component: () => import("../views/blogs/AddBlogs.vue"),
      meta: {
        layout: "DashboardLayout",
      },
    },

    {
      path: "/dashboard/users/",
      name: "users",
      component: () => import("../views/users/UsersView.vue"),
      meta: {
        layout: "DashboardLayout",
      },
    },
    {
      path: "/dashboard/users/add",
      name: "addUsers",
      component: () => import("../views/users/AddUsers.vue"),
      meta: {
        layout: "DashboardLayout",
      },
    },
  ],
});

export default router;
