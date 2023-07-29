<template>
  <div class="condicional-v-show">
    <!-- ------------------------------------------------- -->
    <h4 class="my-5">Condicional / v-show ( = directiva )</h4>
    <!-- ------------------------------------------------- -->

    <!-- ALT + SHIFT + CTRL + A -->

    <button 
          class="btn btn-info my-3"
          @click="cambiarVisibilidad()">
            {{ obtenerTituloVisibildad() }}
        </button>

     <p v-show="getVisibilidad()" class="alert alert-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni aperiam distinctio quas reiciendis beatae.
    </p>
  </div>
</template>

<script>
export default {
    name: 'CondicionalVShow',
    data() {
        return {
            mostrar2: true
        }
    },
    methods: {
        cambiarVisibilidad() {
            this.mostrar2 = !this.mostrar2
        },
        obtenerTituloVisibildad() {
            return this.mostrar2 ? 'Ocultar' : 'Mostrar'
        },
        getVisibilidad() {
            return this.mostrar2
        },
    }
};
</script>

<style></style>
