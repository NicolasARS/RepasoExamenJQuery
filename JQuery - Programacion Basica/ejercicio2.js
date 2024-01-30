$(document).ready(function() {
    // Ocultar la imagen al cargar la página
    $('#contenedor-imagen').hide();
  
    // Mostrar la imagen al hacer clic en "Mostrar Imagen"
    $('#mostrar-imagen').on('click', function() {
      $('#contenedor-imagen').show(2500); // Mostrar con efecto durante 2500 milisegundos (2.5 segundos)
    });
  
    // Ocultar la imagen al hacer clic en "Ocultar Imagen"
    $('#ocultar-imagen').on('click', function() {
      $('#contenedor-imagen').hide('slow'); // Ocultar con efecto "slow"
    });
  });