<template>
  <div class="hello">
    <h1>{{`${msg}, ${prueba}`}}</h1>
    <!-- usando bootstrap -->
    <h3 class="text-primary">Usando bootstrap</h3>
    <h3 class="text-success">Usando bootstrap</h3>
    <h3 class="text-danger">Usando bootstrap</h3>
    <h3 class="text-warning">Usando bootstrap</h3>
    <h3 class="text-info">Usando bootstrap</h3>
    <h3 class="text-light">Usando bootstrap</h3>
    <h3 class="text-dark">Usando bootstrap</h3>
    <h3 class="text-muted">Usando bootstrap</h3>
    <h3 class="text-white">Usando bootstrap</h3>
    <h3 class="text-body">Usando bootstrap</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    prueba: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
