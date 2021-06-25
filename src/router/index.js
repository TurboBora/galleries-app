import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../views/AllGalleries.vue'
import Register from '../views/Register.vue'
import Login from '../components/Login.vue'
import UserGalleries from '../views/UserGalleries.vue'

import { globalAuthGuard } from '../guards/auth.guard'; 

Vue.use(VueRouter)

const routes = [
  /* 
      <router-link to="/">All Galleries</router-link> |
      <router-link to="/my-galleries">My Galleries</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/create">Create New Gallery</router-link> |
      <router-link to="/logout">Logout</router-link>
  */
  {
    path: '/',
    name: 'AllGalleries',
    component: AllGalleries
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    meta: { authRequired: true },
  },
  {
    path: '/my-galleries',
    name: 'UserGalleries',
    component: UserGalleries,
    meta: { authRequired: true },
  },
  {
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);
export default router
