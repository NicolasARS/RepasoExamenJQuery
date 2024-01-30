document.addEventListener('DOMContentLoaded', function () {
document.getElementById('mostrarFecha').addEventListener('click', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('fecha').textContent = this.responseText;
        }
    };
    xhttp.open("GET", "/php/ejercicio6.php", true);
    xhttp.send();
});
});