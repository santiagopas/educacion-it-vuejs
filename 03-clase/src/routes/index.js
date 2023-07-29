import { createRouter, createWebHistory } from 'vue-router'

import App from '../App.vue'
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import Calculos from '../pages/Calculos.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/inicio', component: Home },
    { path: '/blog', 
      component: Blog,
      children: [ /* rutas anidadas */
        { path: ':postId', component: Blog }
      ] 
    },
    { path: '/principal', component: App},
    { path: '/calculos', component: Calculos}
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router