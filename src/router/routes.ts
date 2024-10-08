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
    path: "/resume",
    name: "resume",
    component: () => import("@/views/Resume.vue"),
    meta: {},
  },
  {
    path: "/resume-pt",
    name: "resume-pt",
    component: () => import("@/views/Resume.vue"),
    meta: {},
    props: {
      lang: "pt",
    },
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
