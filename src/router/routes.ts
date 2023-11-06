export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/HomeView.vue"),
    meta: {},
  },
  {
    path: "/about-me",
    name: "about-me",
    component: () => import("@/views/AboutMeView.vue"),
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
] as const;
