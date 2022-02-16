import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Articulos from '../views/Articulos.vue'
import Articulo from '../views/Articulo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/articulos',
    name: 'Home',
    component: Articulos
  },
  {
    path: '/articulos/category=:id',
    name: 'Articulos',
    component: Articulos,
    props: true
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/articulo/:id',
    name: 'Articulo',
    component: Articulo,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
