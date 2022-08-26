import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/viewPersonal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Personal',
      component: HomeView
    },
    {
      path: '/skill',
      name: 'Skill',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/viewSkill.vue')
    }
  ]
})

export default router
