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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/String',
    name: 'String',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/bindString.vue')
  },
  {
    path: '/Html',
    name: 'Html',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/bindHtml.vue')
  },
  {
    path: '/Input',
    name: 'Input',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/bindInput.vue')
  },
  {
    path: '/Select',
    name: 'Select',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/bindSelect.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/bindcheckbox.vue')
  },
  {
    path: '/homework',
    name: 'homework',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/homework.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
