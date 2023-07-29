<template>
  <div class="doble-data-binding">
    <!-- ---------------------------------------------------------- -->
    <h4 class="my-5">Doble Data Binding / v-model ( = directiva )</h4>
    <!-- ---------------------------------------------------------- -->

    <!-- Doble Data Binding (Two-Way Data Binding) es una caracteristica que permite mantener sincronizado automaticamente los datos del modelo y los valores de los elementos de entrada del HTML (DOM) -->

    <h5>Manual</h5>
    <input type="text" :value="valor2" @input="actualizar($event)" />
    {{ valor2 }} <br />

    <h5>Automático</h5>
    <input type="text" v-model="valor3" /> {{ valor3 }}
  </div>
</template>

<script>
export default {
    name: 'DobleDataBinding',
    data() {
        return {
            valor2: 555,
            valor3: 222
        }
    },
    methods: {
        actualizar(e) {
            let dato = e.target.value
            console.log(dato)
            this.valor2 = dato
        },
    }
};
</script>

<style></style>
