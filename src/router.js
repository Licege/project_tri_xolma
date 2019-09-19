import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('./views/Home')
    },
    {
      path: '/menu',
      name: 'menu',
      meta: {layout: 'main'},
      component: () => import('./views/Menu')
    },
    {
      path: '/about',
      name: 'about',
      meta: {layout: 'main'},
      component: () => import('./views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {layout: 'main'},
      component: () => import('./views/Contacts')
    },
    {
      path: '/reserve',
      name: 'reserve',
      meta: {layout: 'main'},
      component: () => import('./views/Reserve')
    },
    {
      path: '/gallery',
      name: 'gallery',
      meta: {layout: 'main'},
      component: () => import('./views/Gallery')
    },
    {
      path: '/reviews',
      name: 'reviews',
      meta: {layout: 'main'},
      component: () => import('./views/Reviews')
    },
    {
      path: '/vacancy',
      name: 'vacancy',
      meta: {layout: 'main'},
      component: () => import('./views/Vacancy')
    },
    {
      path: '/test',
      name: 'test',
      meta: {layout: 'main'},
      component: () => import('./views/testPages')
    }
  ]
})
