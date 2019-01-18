import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mirror from '@/components/Mirror'
import Login from '@/components/Login'
import Main from '@/components/Main'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: '/Mirror',
      name: "Mirror",
      component: Mirror
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        authRequired: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router