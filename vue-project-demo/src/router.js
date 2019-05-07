import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import {
  getToken
} from '@/utils/auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// 不重定向白名单

Router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {

    }
  }
})
