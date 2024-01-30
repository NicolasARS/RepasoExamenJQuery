$(document).ready(function() {
    // Evento de cambio del checkbox
    $('#mostrar-resultado').change(function() {
      // Si el checkbox está marcado, mostrar el campo de resultado
      if ($(this).prop('checked')) {
        // Obtener los valores de los campos de texto
        var numero1 = parseFloat($('#numero1').val()) || 0;
        var numero2 = parseFloat($('#numero2').val()) || 0;

        // Calcular la suma
        var resultado = numero1 + numero2;

        $('#resultado').val(resultado).show();
      }else{
          $('#resultado').hide();
      }
    });
  });