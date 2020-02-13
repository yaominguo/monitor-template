import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import('@/views/main')
const Test = () => import('@/views/test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
  ]
})
