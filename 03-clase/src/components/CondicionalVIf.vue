<template>
  <div class="condicional-v-if">
        <!-- ------------------------------------------------ -->
        <h4 class="my-5">Condicional / v-if | v-else ( = directiva ) </h4>
        <!-- ------------------------------------------------ -->

        <button class="btn btn-warning my-3" @click="mostrar=!mostrar">
            {{ mostrar ? 'Ocultar' : 'Mostrar' }}
        </button>

        <!-- p[v-if="mostrar"].alert.alert-warning>lorem10 -->
        <p v-if="mostrar" class="alert alert-warning">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, quod.
        </p>

        <p v-else class="alert alert-danger">
            Elemento REMOVIDO
        </p>

        <!-- <p v-if="!mostrar" class="alert alert-danger">
            Elemento REMOVIDO
        </p> -->
  </div>
</template>

<script>
export default {
    name: 'CondicionalVIf',
    data() {
        return {
            mostrar: true
        }
    }
}
</script>

<style>

</style>