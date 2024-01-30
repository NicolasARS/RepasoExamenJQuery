$(document).ready(function() {
    // Asociar un evento de cambio a los botones de radio
    $('input[type=radio]').change(function() {
      // Obtener el valor del radio seleccionado
      var colorSeleccionado = $(this).val();

      // Cambiar el color de fondo del párrafo según el valor del radio
      $('p').css('background-color', colorSeleccionado);
    });
  });