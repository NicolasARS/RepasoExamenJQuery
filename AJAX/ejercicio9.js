document.addEventListener('DOMContentLoaded', function() {
    var loadDataButton = document.getElementById('loadData');
    var loadingDiv = document.getElementById('loading');
    var contentDiv = document.getElementById('content');

    loadDataButton.addEventListener('click', function() {
        // Mostrar el GIF de carga
        loadingDiv.style.display = 'block';

        // Hacer una solicitud AJAX a un archivo PHP
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/php/data.php', true); // Reemplaza 'tu_archivo_php.php' con la ruta de tu archivo PHP
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Ocultar el GIF de carga
                loadingDiv.style.display = 'none';

                // Mostrar los datos recibidos
                contentDiv.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
});
