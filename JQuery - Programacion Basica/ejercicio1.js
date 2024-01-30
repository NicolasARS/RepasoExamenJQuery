$(document).ready(function () {
  // Mostrar el número de capas con alert
  var numeroDeCapas = $('div').length;
  alert('Número de capas: ' + numeroDeCapas);

  // Aplicar estilos para cambiar el color del texto a verde
  $('div').css('color', 'green');
});