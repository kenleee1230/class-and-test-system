import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';

import Home from '../views/Home.vue'



Vue.use(ElementUI);

Vue.use(VueRouter)

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
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/index',
    name:'index',
    component: () => import('../views/index.vue')
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
