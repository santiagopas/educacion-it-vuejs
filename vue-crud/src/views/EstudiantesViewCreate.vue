<template>
  <main class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Agregando Estudiantes</h4>
      </div>
      <div class="card-body">
        <div class="mb-3">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="modelo.estudiante.nombre" class="form-control">
        </div>
        <div class="mb-3">
            <label for="nombre">Apellido</label>
            <input type="text" id="nombre" v-model="modelo.estudiante.apellido" class="form-control">
        </div>

        <div class="mb-3">
            <button class="btn btn-primary" @click="guardarEstudiante">Crear</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'


export default {
    name: 'EstudiantesViewCreate',
    setup() {
        const modelo = ref({
            estudiante: {
                nombre: '',
                apellido: ''
            }
        })

        const guardarEstudiante = async () => {

            try {
                const res = await axios.post('http://localhost:3000/estudiantes', modelo.value.estudiante)

                console.log(res.data)

                modelo.value.estudiante = {
                    nombre: '',
                    apellido: ''
                }

            } catch ( err ) {
                console.log(err.response)
            }
        }
        return {
            modelo,
            guardarEstudiante
        }
    }
}

</script>
