import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/form'
  },
  {
    path: '/login',
    component: () => import('views/Login/login.vue')
  },
  {
    path: '/form',
    component: () => import('views/Home/Home.vue')
  },
  {
    path: '*',
    component: () => import('views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
