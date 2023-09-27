/*
 * @Author: yuanzengding
 * @Date: 2023-09-26 15:22:50
 * @LastEditors: yuanzengding
 * @LastEditTime: 2023-09-26 16:04:07
 * @Description:
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import("@/views/List.vue")
    },{
      path: '/1',
      name: 'home1',
      component:()=>import("@/views/List2.vue")
    },
  ]
})

export default router
