$(document).ready(function() {
    // Evento de pasar el ratón por encima
    $('p').mouseenter(function() {
      // Cambiar el tamaño del texto a 16pt
      $(this).css('font-size', '16pt');
    });

    // Evento de salir con el ratón
    $('p').mouseleave(function() {
      // Volver al tamaño inicial
      $(this).css('font-size', ''); // Dejar en blanco para volver al valor por defecto
    });
  });