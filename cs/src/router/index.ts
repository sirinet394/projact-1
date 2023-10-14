import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import information from '../views/information.vue'

import insurance from '../views/insurance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'insurance',
      component: insurance
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/information',
      name: 'information',
      component: information
    }
  ]
})

export default router
