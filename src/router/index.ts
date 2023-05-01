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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
