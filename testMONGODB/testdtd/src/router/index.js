import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/부산대학식',
    name: '부산대학식',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/부산대학식.vue')
  },
  {
    path: '/미세먼지',
    name: '미세먼지',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/미세먼지.vue')
  },
  {
    path: '/번역기',
    name: '번역기',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/번역기.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
