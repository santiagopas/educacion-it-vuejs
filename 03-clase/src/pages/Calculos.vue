<template>
  <div>
    <h1>Cálculos</h1>
    <!-- Suma -->
    <Sumar :valor1="5" :valor2="4" />
    <Sumar :valor1="5" :valor2="8" />
    <Sumar :valor1="15" :valor2="4" />
    <!-- division -->
    <Division />
    <DivisionComposition />
    <DivisionCompositionV2 />
  </div>
</template>

<script>
import Sumar from '../components/Sumar.vue';
import Division from '../components/Division.vue';
import DivisionComposition from '../components/DivisionComposition.vue';
import DivisionCompositionV2 from '../components/DivisionCompositionV2.vue';
export default {
  name: 'Calculos',
  components: {
    Sumar,
    Division,
    DivisionComposition,
    DivisionCompositionV2
  }
}
</script>

<style></style>