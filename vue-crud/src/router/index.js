import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import SobreNosotros from "../views/SobreNosotros.vue";
import EstudiantesView from "../views/EstudiantesView.vue";
import EstudiantesViewEdit from "../views/EstudiantesViewEdit.vue";
import EstudiantesViewCreate from "../views/EstudiantesViewCreate.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: InicioView
    },
    {
      path: "/sobre-nosotros",
      component: SobreNosotros
    },
    {
      path: "/estudiantes",
      component: EstudiantesView,
    },
    {
      path: "/estudiantes/create",
      component: EstudiantesViewCreate
    },
    {
      path: "/estudiantes/edit/:id",
      component: EstudiantesViewEdit
    }
  ]
})

export default router;