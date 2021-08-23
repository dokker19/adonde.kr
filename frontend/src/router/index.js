import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Mypage from '@/views/Mypage.vue'
import Intro from '@/views/Intro.vue'
import Details from '@/views/Details.vue'

Vue.use(Router)

const routes = [
    {
      name: 'intro',
      path:'/intro',
      component:Intro

    },
    {
      name: 'home',
       path: '/',
       component: Home
    },
    {
      name: 'mypage',
      path: '/mypage',
      component: Mypage
    },
    {
      name: 'details',
      path: '/details',
      component: Details,
      props: true
    }
]

export default new Router({
  mode: 'history',
  routes

})
