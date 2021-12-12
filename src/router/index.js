import HelloWorld from '@/components/HelloWorld'
import Three from '@/components/Three'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    }
  ]
})
