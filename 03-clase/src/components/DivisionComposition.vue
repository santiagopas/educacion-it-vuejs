<template>
  <form>
    <h1>Division composition</h1>
    <input type="number" v-model="num1" @input="validateInput">
    <span>/</span>
    <input type="number" v-model="num2" @input="validateInput">
    <span>=</span>
    <span>{{ resultado }}</span>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'DivisionComposition',
  setup() {
    const num1 = ref(0)
    const num2 = ref(0)
    const errorMessage = ref('')

    const resultado = computed(() => {
      try {
        const res = num1.value / num2.value
        if (isNaN(res) || !isFinite(res)) {
          throw new Error('Invalid input')
        }
        if (num2.value === 0) {
          return 0
        }
        return res
      } catch (error) {
        errorMessage.value = error.message
        return 0
      }
    })

    function validateInput() {
      if (num2.value === 0) {
        errorMessage.value = 'dividir por cero siempre es 0'
      } else if (isNaN(num1.value) || isNaN(num2.value)
        || !isFinite(num1.value) || !isFinite(num2.value)
        || num1.value === '' || num2.value === ''
        || num1.value === null || num2.value === null
        || num1.value === undefined || num2.value === undefined
      ) {
        errorMessage.value = 'Ingrea un numero valido'
      } else {
        errorMessage.value = ''
      }
    }

    return {
      num1,
      num2,
      resultado,
      errorMessage,
      validateInput
    }
  },
}
</script>

<style>
body {
  background-color: #1a1a1a;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  color: #fff;
}
</style>