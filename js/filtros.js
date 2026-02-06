const ap1= Vue.createApp({
     data(){
        return {
            titulo: 'Cazarecompensas Espacial',
            nombre: '¿Buscas alguna recompensa? ¡Este es tu lugar, que esperas!', 
            subtitulo: 'Filtros en VUE'    
        }
    
    }
});
const ap2=Vue.createApp({
  data(){
    return{
        recompensas:[
          {titulo:"Boba Fett",planeta:"Kamino",puntuacion:9},
          {titulo:"Atriox",planeta:"Doisac",puntuacion:3},
          {titulo:"Liara T'Soni",planeta:"Thessia",puntuacion:6},
          {titulo:"Darth Vader",tipo:"Tatooine",puntuacion:10}
        ],
        minimo:0,
        clase:0
        }
  },
  computed:{
    mejoresRecompensas(){
      return this.recompensas.filter((recompensa)=>recompensa.puntuacion>=this.minimo);
    },
    textoAmenaza(){
        if(this.minimo>=8){
            return "Alto"
        } else if (this.minimo>=5){
            return "Medio"
        } else {
            return "Bajo"
        }
    },
    claseAmenaza(){
      return {
        colorAmarillo: this.minimo < 5,
        colorVerde: this.minimo >= 5 && this.minimo < 8,
        colorRojo: this.minimo >= 8
      }
    },
  },

});

ap2.mount('#articulo1')

const ap3=Vue.createApp({
    data(){
      return{
        recompensas:[
          {titulo:"Boba Fett",planeta:"Kamino",puntuacion:9},
          {titulo:"Atriox",planeta:"Doisac",puntuacion:8},
          {titulo:"Liara T'Soni",planeta:"Thessia",puntuacion:9},
          {titulo:"Darth Vader",planeta:"Tatooine",puntuacion:10}
        ],
        buscar:'',
      }
    },
    computed:{
    recompensaEncontrados(){
      return this.recompensas.filter((recompensa)=>{ 
        return (
        recompensa.titulo.toLowerCase().includes(this.buscar.toLowerCase()) ||
        recompensa.planeta.toLowerCase().includes(this.buscar.toLowerCase())
      )});
    },

  }
});
ap3.mount('#articulo2')
const ap4= Vue.createApp({
  data(){
     return {        
         nombre: 'Pablo Cobian' ,
         mensaje:'Hoy es: '+new Date().toLocaleString(),
         bandera:true, 
         contador:0,
    }
  },
  methods: {
      incremento() {
        this.contador++;
        return this.contador
      }
    },
    
});
ap4.mount('#divfooter')