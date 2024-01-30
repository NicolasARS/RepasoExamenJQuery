$(document).ready(function() {
    // Mostrar la imagen inicialmente
    $('img').show();

    // Aplicar efecto fadeOut con un callback
    $('img').fadeOut(2000, function() {
      // Este código se ejecutará después de que se complete el fadeOut
      // Aplicar efecto slideDown con un callback
      $(this).slideDown(3000, function() {
        // Este código se ejecutará después de que se complete el slideDown
        // Aplicar efecto slideUp con un callback
        $(this).slideUp(1000, function() {
          // Este código se ejecutará después de que se complete el slideUp
          // Puedes agregar más lógica aquí si es necesario
          console.log("Todos los efectos han terminado.");
        });
      });
    });
  });