document.addEventListener('DOMContentLoaded', function () {
document.getElementById('cambiarImagen').addEventListener('click', function() {
  fetch('https://source.unsplash.com/random/800x600')
      .then(response => {
          document.getElementById('imagenDinamica').src = response.url;
      })
      .catch(error => {
          console.error('Error al cambiar la imagen:', error);
      });
});
});