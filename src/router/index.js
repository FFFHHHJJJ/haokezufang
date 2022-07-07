import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/layout/find',
        component: () => import('@/views/FindHouse')
      },
      {
        path: '/layout/news',
        component: () => import('@/views/news')
      },
      {
        path: '/layout/my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/city',
    component: () => import('@/views/SearchCity')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
