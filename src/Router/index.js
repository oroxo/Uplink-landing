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
    {
      path: '/about', name: 'nosotros', component: () => import('../Pages/About.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },
    {
      path: '/plans', name: 'planes', component: () => import('../Pages/Plans.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },
    {
      path: '/tv', name: 'tv', component: () => import('../Pages/tv.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },
    {
      path: '/contact', name: 'contact', component: () => import('../Pages/Contact.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },
    {
      path: '/speedtest', name: 'speedtest', component: () => import('../Pages/speedtest.vue'),
      // children: [
      //   { path: '/', name: 'web.home', component: () => import('../views/Home.vue') }
      // ]

    },

  ]
})

export default router
