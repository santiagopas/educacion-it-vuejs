// componentes
import EventBinding from '../components/EventBinding.vue'
import Home from '../components/Home.vue'
import Blog from '../components/Blog.vue'
import Routeo from '../components/Routeo.vue'
/* Array rutas */
 const routes = [
  {
    path: '/', component: EventBinding
  },
  {
    path: '/home', component: Home
  },
  {
    path: '/blog', component: Blog
  },
  {
    path: '/routeo', component: Routeo
  }

]
export default routes