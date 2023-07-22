<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" prueba="mensaje de prueba de props"/> -->
    <PropertyBinding />
    <PropertyBindingVBindVue />
    <EventBinding />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PropertyBinding from './components/PropertyBinding.vue'
import PropertyBindingVBindVue from './components/PropertyBindingVBind.vue'
import EventBinding from './components/EventBinding.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    PropertyBinding,
    PropertyBindingVBindVue,
    EventBinding
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1f1f1;
  background-color: #2c2d2e;
  height: 100%;
}
</style>
