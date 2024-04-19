document.addEventListener('DOMContentLoaded', function(){
 setInterval(() => {
  document.getElementById('navbar');
  navbar.style.color = 'green';
  document.getElementById('call');
  call.style.color = 'tomato';
 },6000);

window.addEventListener('click',function(){
 document.getElementById('telefono');
  telefono.style.color = '#fff';
  document.getElementById('titulo');
  titulo.style.color = 'green';
});

  

});