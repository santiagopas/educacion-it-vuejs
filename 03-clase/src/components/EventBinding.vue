<template>
  <div class="event-binding">
    <!-- -------------------------------------------------- -->
    <h4 class="my-5">Event Binding / v-on ( = directiva )</h4>
    <!-- -------------------------------------------------- -->

    <!-- Event Binding => es una técnica que permite manejar eventos en los atributos (elementos) HTML y ejecutar métodos o acciones definidas en el componente de VUE -->

    <button class="btn btn-success my-3" v-on:click="contador++">
      Contar 1: {{ contador }}
    </button>
    <button class="btn btn-success my-3" @click="contador2++">
      Contar 2: {{ contador2 }}
    </button>
    <button class="btn btn-success my-3" @click="incrementar()">
      Contar 3: {{ getContador() }}
    </button>
  </div>
</template>

<script>
export default {
    name: 'EventBinding',
    data() {
       return {
         contador: 0,
         contador2: 123,
         contador3: 543
       }    
    },
    methods: {
        incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
    }
};
</script>

<style></style>
