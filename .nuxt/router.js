import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2328bfd7 = () => interopDefault(import('../pages/layouts' /* webpackChunkName: "" */))
const _35715b5e = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _78497f92 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _1332def7 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _372dded6 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _a9fe2b42 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _0c05bb78 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active-link',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2328bfd7,
    children: [{
      path: "",
      component: _35715b5e,
      name: "home"
    }, {
      path: "/login",
      component: _78497f92,
      name: "login"
    }, {
      path: "/register",
      component: _78497f92,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _1332def7,
      name: "profile"
    }, {
      path: "/settings",
      component: _372dded6,
      name: "settings"
    }, {
      path: "/editor",
      component: _a9fe2b42,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _0c05bb78,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
