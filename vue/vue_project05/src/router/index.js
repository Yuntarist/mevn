import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Main.vue'
import Params from '../views/Params.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Params/:name/:age', // params 사용시 꼭 넣을것
    name: 'Params',
    props: true, // props 사용시 꼭 넣을 것
    component: Params
  },
  {
    path: '/Query',
    name: 'Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Query.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
