import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/views/main')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
  ]
})
