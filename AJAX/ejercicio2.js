document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('inicioLink').addEventListener('click', function (e) {
        e.preventDefault();
        cargarContenido('index2-1.html');
    });

    document.getElementById('ejercicioLink').addEventListener('click', function (e) {
        e.preventDefault();
        cargarContenido('index1.html');
    });

    // Función para cargar contenido con AJAX
    function cargarContenido(url) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }
});