const app = Vue.createApp({
  data() {
      return { 
        imagen:'./img/plama.png', 
        gitmefive:'Git me five',
        saludo: 'Chocala, para continuar...', 
        text: 'Crea una App Vue, que tendrá un título, subtitulo, un párrafo. Añadiremos una fotografía en la página desde el lado del JS y después saludaremos al usuario que también lo pararemos los datos desde el JS',
        usuario: 'Teacher ',
        textSaludo: 'Hello!!! Te saludo desde Vue 👋🏽'
        
      }
  },
  methods: {
    chocala() {
        
        this.imagen='./img/DiveControl.png',
        this.gitmefive=this.usuario+this.textSaludo 
        this.saludo = '',
        this.text = 'Have a nice day 🤓'
    }
},

})

app.mount('#app');