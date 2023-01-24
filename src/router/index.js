import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Navbar from '../components/Navbar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/about',
    name: 'About',
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router