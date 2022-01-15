import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/movie.vue'
import Series from '../views/series.vue'
import live from '../views/live.vue'
import push from '../views/push.vue'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/series',
    name: 'Series',
    component: Series

  },
  {
    path: '/push',
    name: 'push',
    component: push

  },
  {
    path: '/live',
    name: 'live',
    component: live

  },
  {
    path: '/',
    name: 'Movie',
    component: Movie
    
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
