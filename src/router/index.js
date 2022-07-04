import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/TheHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/TheLogin.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: { name: 'index' },
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/IndexPage.vue')
      },
      {
        path: '/dataView',
        name: 'dataView',
        component: () => import('@/views/echarts/DataView.vue')
      },
      {
        path: '/systemSettings',
        name: 'systemSettings',
        component: () => import('@/views/setting/SystemSettings.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
