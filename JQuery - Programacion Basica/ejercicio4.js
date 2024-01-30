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

        // Crear un nuevo campo de texto para mostrar el resultado
        $('#formulario').append('<input type="text" id="resultado" value="' + resultado + '" readonly>');
      } else {
        // Si el checkbox está desmarcado, eliminar el campo de resultado
        $('#resultado').remove();
      }
    });
  });