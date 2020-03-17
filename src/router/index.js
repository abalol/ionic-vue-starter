import Vue from 'vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Sample from '../views/Sample.vue'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ホーム',
      component: Home
    },
    {
      path: '/about',
      name: 'アバウト',
      component: About
    },
    {
      path: '/sample',
      name: 'さんぷる',
      component: Sample
    }
  ]
})