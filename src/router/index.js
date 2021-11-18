import { createRouter, createWebHistory } from 'vue-router'

const Credentials = () => import('../views/Credentials/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Home = () => import('../views/Home/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: { hasAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
