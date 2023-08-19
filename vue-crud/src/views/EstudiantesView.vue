<script>
import { RouterLink } from "vue-router";
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue'
import axios from 'axios'
import Cargando from '../components/Loading.vue'
import Swal from 'sweetalert2'

export default {
  name: 'estudiantes',
  components: {
    RouterLink,
    Cargando,

  },
  /* hook setup: Se ejecuta antes de que el componente sea montado en el DOM */
  setup() {
    const estudiantes = ref([])

    async function getEstudiantes() {
      const res = await axios.get('http://localhost:3000/estudiantes')
      estudiantes.value = res.data; // Asigna los estudiantes a la variable reactiva
      console.log(res.data);
    }




    /* hook onBeforeMount: Se ejecuta antes de que el compoennte sea montado en el DOM. beforeMount() */
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    /* hook onMounted(): Se ejecuta después de que el compoenente se haya montado en el DOM, mounted() */
    onMounted(() => {
      console.log('onMounted');
      getEstudiantes();
    });
    /* hook onBeforeUpdate: Se dispara antes de que los cambios sean aplicados al DOM cuando los datos del componente se actualizan */
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    /* hook onUpdated: Se ejecuta después de que los cambios en los datos del componente se hayan reflejado en el DOM */
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    /* hook onUpdated: Se ejecuta después de que los cambios en los datos del componente se hayan reflejado en el DOM */
    onUpdated(() => {
      console.log('onUpdated');
    });
    /* hook onBeforeUnmount. Se dispara antes de que un componenete sea destruido, similar al hook beforeDestroy */
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    /* hook onUnmounted. Se dispara después de que un componenete sea destruido, similar al hook destroyed */
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    function borrarEstudiante(idEstudiante) {
      Swal.fire({
        title: "¿Estás seguro que lo querés borrar?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borralo!",
        cancelButtonText: "No lo borres!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/estudiantes/${idEstudiante}`)
                .then(res => {
                    console.log(res.data)
                    getEstudiantes()  
                })
          Swal.fire("Borrado!", "El estudiante fue borrado", "success");
        } else {
            Swal.fire("No lo borraste!", "info");
        }
      });
    }
    return {
      estudiantes, // Asegura que estudiantes esté disponible en el objeto retornado
      borrarEstudiante,
    };
  },
};
</script>
<template>

    <div class="card">
      <div class="card-header">
        <h4>Estudiantes</h4>
        <router-link to="/estudiantes/create" class="btn btn-primary float-end">
          Crear estudiante
        </router-link>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Edad</th>
              <th scope="col">Carrera</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody v-if="estudiantes.length > 0" >
            <!-- Utiliza v-for para iterar sobre la matriz de estudiantes -->
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <th scope="row">{{ estudiante.id }}</th>
              <td>{{ estudiante.nombre }}</td>
              <td>{{ estudiante.apellido }}</td>
              <td>{{ estudiante.edad }}</td>
              <td>{{ estudiante.carrera }}</td>
              <td>
                <RouterLink :to="`/estudiantes/edit/${estudiante.id}`" class="btn btn-success">Editar</RouterLink>
                <button class="btn btn-danger" @click="borrarEstudiante(estudiante.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6" class="text-center">
                <Cargando />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

</template>


