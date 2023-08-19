import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

/* Middleware */
app.use(router) // <= archivo de rutas

app.mount('#app')
