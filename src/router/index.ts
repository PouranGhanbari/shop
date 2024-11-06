import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'
import DashboardPage from '@/views/dashboard/DashboardPage.vue'
import LoginPage from '@/views/login/LoginPage.vue'
import CartPage from '@/views/cart/CartPage.vue'
import { isAuthenticated } from '@/utils/isToken'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
      beforeEnter: (to, from, next) => {
        if (!isAuthenticated()) {
          next('/login') 
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
    }
  ]
})

export default router
