<template>
  <form>
    <h1>Division composition</h1>
    <input type="number" v-model="num1">
    <span>/</span>
    <input type="number" v-model="num2">
    <span>=</span>
    <span>{{ resultado }}</span>
  </form>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'DivisionComposition',
  setup() {
    // ref se usa para crear una variable reactiva para primitivos
    // computed se usa para crear una variable reactiva para objetos
    
    const num1 = ref(0)
    const num2 = ref(0)

    const resultado = computed(() => {
      const res = num1.value / num2.value
      console.log(isNaN(res))
      return isNaN(res) ? 0 : res
    })

    return {
      num1,
      num2,
      resultado
    }
  },
}
</script>

<style></style>