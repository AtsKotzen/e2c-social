import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/testify',
    name: 'testify',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Testify.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Transactions.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/wish-list',
    name: 'wish-list',
    component: () => import( /* webpackChunkName: "settings" */ '../views/DesejoAcessar.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/liquidate',
    name: 'liquidate',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Liquidar.vue'),
    meta: {
      requiresAuth: true
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
