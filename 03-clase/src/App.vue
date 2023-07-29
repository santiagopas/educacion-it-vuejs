<template>
  <div class="container-fluid">
      <h1>Vue.js vía VUE CLI - Bienvenidos</h1>
      <hr>        

      <h2>DIRECTIVAS VUE</h2>

      <PropertyBinding />
      
      <hr>

      <PropertyBindingVBind />

       <hr>

       <EventBinding />

      
      <hr>

      <DobleDataBinding />

      <hr>

      <CondicionalVIf />

      <hr>

      <CondicionalV-show />

      <hr>

      <Modal>
        <p>Esto es el <strong>cuerpo</strong> del modal</p>

        <template v-slot:header>
          <h5 class="modal-title">Título épico</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </template>

        <template v-slot:footer>
           <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cerrar
        </button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
        </template>
      </Modal>
      
  </div>
</template>

<script>
import CondicionalVIf from './components/CondicionalVIf.vue'
import CondicionalVShow from './components/CondicionalVShow.vue'
import DobleDataBinding from './components/DobleDataBinding.vue'
import EventBinding from './components/EventBinding.vue'
import Modal from './components/Modal.vue'
import PropertyBinding from './components/PropertyBinding.vue'
import PropertyBindingVBind from './components/PropertyBindingVBind.vue'


export default {
name: 'App',
components: {
  PropertyBinding,
  PropertyBindingVBind,
  EventBinding,
  DobleDataBinding,
  CondicionalVIf,
  CondicionalVShow,
  Modal
}
}
</script>

<style>

#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
