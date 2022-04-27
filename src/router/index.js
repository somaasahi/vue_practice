import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import HomeView from '@/views/HomeView.vue'

//import MyTopView from '../views/MyTopView.vue'
import MyTopView from '@/views/MyTopView.vue'

import ComputedView from '@/views/ComputedView.vue'

import MyStateView from '@/views/MyState/index.vue'

import TestView from '@/views/TestView.vue'

import ImageApi from '@/views/ImageApi.vue'

import LikesView from '@/views/Likes.vue'

import GameView from '@/views/GameView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/myTop',
    name: 'myTop',
    component: MyTopView
  },
  {
    path: '/computed',
    name: 'computed',
    component: ComputedView
  },
  {
    path: '/myState',
    name: 'myState',
    component: MyStateView
  },
  {
    path: '/myTest',
    name: 'myTest',
    component: TestView
  },
  {
    path: '/ImageApi',
    name: 'ImageApi',
    component: ImageApi
  },
  {
    path: '/LikesView',
    name: 'LikesView',
    component: LikesView
  },
  {
    path: '/GameView',
    name: 'GameView',
    component: GameView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
