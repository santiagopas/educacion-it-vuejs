
import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './style.css'
import Ruteo from './components/Ruteo.vue'
import router from './routes'

const app = createApp(Ruteo)
/* Middleware (Para incorporar a mi aplicación vue las vue-router) */
app.use(router) // plugins

app.mount('#app')