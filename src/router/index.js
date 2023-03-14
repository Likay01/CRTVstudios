import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/signup',
    name:'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
path: '/single',
name: 'single',
component: ()=> import('../views/SingleProdView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ()=> import('../views/SingleProdView.vue')
      },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/naledi',
    name: 'naledi',
    component: () => import('../views/NalediArtistView.vue')
  },
  {
    path: '/karen',
    name: 'karen',
    component: () => import('../views/KarenArtistView.vue')
  },
  {
    path: '/brian',
    name: 'brian',
    component: () => import('../views/BrianArtistView.vue')
  },
  {
    path: '/ines',
    name: 'ines',
    component: () => import('../views/InesArtistView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
