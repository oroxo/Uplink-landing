import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.css'
import '@/styles/app.css'

// import axios from 'axios'
// import VueAxios from 'vue-axios'


import router from './Router'

const app = createApp(App)

app.use(router)
// app.use(VueAxios, axios)

app.mount('#app')

