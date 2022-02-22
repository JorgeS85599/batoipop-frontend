import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Articulos from '../views/Articulos.vue'
import Articulo from '../views/Articulo.vue'
import Usuario from '../views/Usuario.vue'

import NewProduct from '../views/NewProduct'
//store
import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    component: Login,
    beforeEnter: ifNotAuthenticated
  },

  {
    path: '/new-product',
    name: 'NewProduct',
    component: NewProduct,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/articulo/:id',
    name: 'Articulo',
    component: Articulo,
    props: true
  },
  {
    path: '/cuenta/:id',
    name: 'Cuenta',
    component: Usuario,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
