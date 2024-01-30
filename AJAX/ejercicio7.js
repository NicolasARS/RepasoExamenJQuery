document.addEventListener('DOMContentLoaded', function () {
document.getElementById('enviarSaludo').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('respuesta').textContent = this.responseText;
        }
    };
    xhttp.open("GET", "/php/saludo.php?nombre=" + encodeURIComponent(nombre), true);
    xhttp.send();
});
});