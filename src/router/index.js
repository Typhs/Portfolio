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
    title:"test", 
    component: TestArea,
    meta: {
      title: "test-area"
    },
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

const DEFAULT_TITLE = "Portfolio";
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
