import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: () => import('../Pages/Landing.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },
    {
      path: '/pagos', name: 'pagos', component: () => import('../Pages/Payment.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },

  ]
})

export default router
