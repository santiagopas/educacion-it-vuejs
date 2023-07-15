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
      }
    }
  });
