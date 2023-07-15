const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'mensaje con vue usando cdn',
        mensajeHTML: '<b>mensaje con vue usando cdn</b>',
        valor: 'valor inicial',
        contador: 0,
        contador2: 0,
        contador3: 0,
        valor2: 2,
        valor3: 3,
        mostrar: true,
        mostrar2: true,
    },
    methods:{
      incrementar() {
        this.contador3++;
      },
      getContador() {
        return this.contador3;
      },
      actualizar (e) {
        const dato = e.target.value;
        this.valor2 = dato;
      },
      cambiarVisibilidad() {
        this.mostrar2 = !this.mostrar2;
      },
      obtenerVisibilidad() {
        return this.mostrar2 ? 'visible' : 'oculto';
      },
      visibilidad() {
        return {
          visible: this.mostrar2,
          oculto: !this.mostrar2,
        };
      },
    },
  });
