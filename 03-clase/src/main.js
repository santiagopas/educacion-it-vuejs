// librerias primero
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//luego archivos del proyecto
import './style.css'
import App from './App.vue'
import routes from './routes/index.js'
/* El objeto de configuración de las router */
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

/*Middleware, cuando se usa  'use'*/
app.use(router)

app.mount('#app')
