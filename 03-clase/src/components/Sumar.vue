<template>
  <div>
    <strong>{{ valor1 }} + </strong>
    <strong>{{ valor2 }}</strong>
    <h4>Sumar: {{ valor1 + valor2 }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Sumar',
  /* props: ['valor1', 'valor2'] */
  props: {
    valor1: {
      type: Number,
      default: 10
    },
    valor2: {
      type: Number,
      required: true,
    },
  }
}
</script>

<style></style>