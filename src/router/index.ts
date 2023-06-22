import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: "home",
    component: () => import('@/views/Home.vue'),
    meta: {}
  },
  {
    path: '/about-me',
    name: "about-me",
    component: () => import('@/views/ViewComponents/AboutMe/AboutMe.vue'),
    meta: {}
  },
  {
    path: '/test',
    name: "test",
    component: () => import('@/views/ViewComponents/TestView.vue'),
    meta: {}
  },
  {
    path: '/test2',
    name: "test",
    component: () => import('@/views/ViewComponents/TestView2.vue'),
    meta: {}
  },
  {
    path:  "/:catchAll(.*)",
    redirect:  {path: '/'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
