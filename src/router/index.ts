import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/Home.vue"),
    meta: {},
  },
  {
    path: "/about-me",
    name: "about-me",
    component: () => import("@/views/AboutMe/AboutMe.vue"),
    meta: {},
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestView.vue"),
    meta: {},
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("@/views/TestView2.vue"),
    meta: {},
  },
  {
    path: "/test3",
    name: "test3",
    component: () => import("@/views/TestView3.vue"),
    meta: {},
  },
  {
    path: "/:catchAll(.*)",
    redirect: { path: "/" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
