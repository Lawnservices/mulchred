const app = Vue.createApp({
  data() {
    return {
      titulo: "Miguel Lawn Services",
      descripcion: "I WOULD LOVE TO FIX YOUR GARDEN.."
    }
  }
})

app.mount('#app')

let fecha = new Date();
let mensaje = "Mulchred. All Rights Reserved.";
let foto = '©';  
document.getElementById('fecha').textContent = foto + ' ' + fecha.getFullYear() + ' ' + mensaje;