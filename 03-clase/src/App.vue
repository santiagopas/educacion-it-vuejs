<template>
  <div id="app">
    <h2>Router</h2>
    <router-link to="/">Home</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/routeo">Routeo</router-link>

    <Routeo/>
    <Home/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" prueba="mensaje de prueba de props"/> -->
    <PropertyBinding />
    <PropertyBindingVBindVue />
    <EventBinding />
    <Modal>
      <p>Esto es el <strong>cuerpo</strong> del modal</p>

      <template v-slot:header>
        <h5 class="modal-title">Título épico</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </template>

      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cerrar
        </button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </template>
    </Modal>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PropertyBinding from './components/PropertyBinding.vue'
import PropertyBindingVBindVue from './components/PropertyBindingVBind.vue'
import EventBinding from './components/EventBinding.vue'
import Modal from './components/Modal.vue'
import Home from './components/Home.vue'
import Routeo from './components/Routeo.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    PropertyBinding,
    PropertyBindingVBindVue,
    EventBinding,
    Modal,
    Home,
    Routeo
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
