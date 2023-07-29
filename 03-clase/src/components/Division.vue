<template>
  <form action="">
    <h1>Division</h1>
    <label for="">num1</label>
    <input type="number" v-model="num1">
    <br>
    /
    <br>
    <label for="">num2</label>
    <input type="number" v-model="num2">
    <br>
    <span>Resultado: {{ resultado }} </span>
  </form>
</template>

<script>
export default {
  name: 'Division',
  data() {
    return {
      num1: 0,
      num2: 0,
    }
  },
  computed: {
    resultado() {
      const res = this.num1 / this.num2
      console.log(isNaN(res))
      return isNaN(res) ? 0 : res
    }
  },
}
</script>

<style></style>