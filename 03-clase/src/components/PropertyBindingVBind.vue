<template>
    <div>
    <!-- ------------------------------------------------------- -->
    <h4 class="my-5">Property Binding / v-bind ( = directiva )</h4>
    <!-- ------------------------------------------------------- -->

    <!-- Property Binding => es una técnica utilizada para enlazar o vincular un atributos del HTML con datos del modelo VUE -->

    <!-- .my-5>input*4 -->
    <div class="my-5">
      <input type="text" value="123" /> <br />
      <input type="text" value="valor" /> <br />
      <input type="text" v-bind:value="valor" /> {{ valor }} <br />
      <input type="text" :value="valor" /> {{ valor }} <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyBinding",
  data() {
    return {
      valor: 456
    };
  }
}
</script>

<style>

</style>