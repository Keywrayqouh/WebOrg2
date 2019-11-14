import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Burial from '../views/BurialCategory.vue'
import Wedding from '../views/WeddingCategory.vue'
import Birthday from '../views/BirthdayCategory.vue'
import Baptist from '../views/BaptistCategory.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'home',
    component: Home
  },

  {
    path: '/About',
    name: 'About',
    component: About
  }, {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup
  },
  
  {
    path: "/BurialCategory",
    name: "Burial",
    component: Burial
  },
  {
    path: "/WeddingCategory",
    name: "Wedding",
    component: Wedding
  },

  {
    path: "/BaptistCategory",
    name: "Baptist",
    component: Baptist
  },

  {
    path: "/BirthdayCategory",
    name: "Birthday",
    component: Birthday
  },




]

const router = new VueRouter({
  routes
})

export default router
