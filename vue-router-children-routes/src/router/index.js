import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/:something',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        name: 'AboutMe',
        path: 'me',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue'),
      },
      {
        name: 'AboutDog',
        path: 'dog',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutDog.vue'),
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
