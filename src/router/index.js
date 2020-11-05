import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import All from '../views/All.vue'
import Best from '../views/Best.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/All',
    name: 'All',
    component: All
  },
  {
    path: '/Best',
    name: 'Best',
    component: Best
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
