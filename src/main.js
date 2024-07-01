import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.css'
import '@/styles/app.css'
import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
import "@egjs/vue3-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue3-flicking/dist/flicking-inline.css";


// import axios from 'axios'
// import VueAxios from 'vue-axios'


import router from './Router'

const app = createApp(App)

app.use(router)
// app.use(VueAxios, axios)
app.component("Flicking", Flicking);

app.mount('#app')

