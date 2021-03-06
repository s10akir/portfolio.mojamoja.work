import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/skills',
      name: 'skils',
      component: () => import('./views/Skills.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('./views/Activity.vue')
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
