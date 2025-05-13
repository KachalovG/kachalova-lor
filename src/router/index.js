import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'   // поправьте путь, если у вас иначе

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    
    if (savedPosition) {
      return savedPosition
    }
   
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
 
    return { left: 0, top: 0 }
  }
})

export default router
