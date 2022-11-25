import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import prueba2Router from "../modules/Prueba2/router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Prueba2',
    ...prueba2Router
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
