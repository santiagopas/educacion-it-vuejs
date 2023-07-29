<template>
  <form>
    <h1>Division composition V2</h1>
    <input type="number" v-model="num1">
    <span>/</span>
    <input type="number" v-model="num2">
    <span>=</span>
    <span>{{ resultado }}</span>
  </form>
</template>


<script setup>
import { ref, reactive, computed } from 'vue'

const estado = {
  num1: ref(5),
  num2: ref(0)
}

const resultado = computed(() => {
  const res = estado.num1.value / estado.num2.value
  console.log(isNaN(res))
  return isNaN(res) ? 0 : res
})

</script>

<style></style>