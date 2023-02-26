import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TestArea from "@/views/TestView.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/test-area',
    name: 'test-area',
    component: TestArea,
  },  
  { //========== 404 ROUTE REDIRECT ========== 
    path: "*",
    redirect: to => {
      return { name: "home"}
    },
  } //========== 404 ROUTE REDIRECT ==========
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
