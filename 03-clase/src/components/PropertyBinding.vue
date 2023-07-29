<template>
  <div class="property-binding">
    <!-- -------------------------------------------- -->
    <h4 class="my-5">Interpolación / v-text / v-html</h4>
    <!-- -------------------------------------------- -->

    <p>{{ mensaje }}</p>
    <p v-text="mensaje"></p>
    <p v-html="mensaje"></p>

    <p>{{ mensajeHTML }}</p>
    <p v-text="mensajeHTML"></p>
    <p v-html="mensajeHTML"></p>
  </div>
</template>

<script>
export default {
  name: "PropertyBinding",
  data() {
    return {
      mensaje: "Hola desde PropertyBinding",
      mensajeHTML: "<b>Hola desde PropertyBinding</b>"
    }
    
  }
}
</script>

<style></style>