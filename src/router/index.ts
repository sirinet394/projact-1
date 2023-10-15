import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import information from '../views/information.vue'
import insurance from '../views/insurance.vue'
import information_pets from '../views/information_pets.vue'

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
    },
    {
      path: '/information_pets',
      name: 'information_pets',
      component: information_pets
    }
  ]
})

export default router
