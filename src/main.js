import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.css'
import '@/styles/app.css'
import router from './Router'

const app = createApp(App)

app.use(router)

app.mount('#app')

