document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cargarJson').addEventListener('click', function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                procesarJson(this.responseText);
                document.getElementById('json').textContent = this.responseText;
            }
        };

        function procesarJson(jsonString) {
            var json = JSON.parse(jsonString);
            var contenido = '';
            var colores = json.arrayColores;

            for (var i = 0; i < colores.length; i++) {
                var nombreColor = colores[i].nombreColor;
                var valorHexadec = colores[i].valorHexadec;
                contenido += 'Color: ' + nombreColor + ' - Valor Hexadecimal: ' + valorHexadec + '<br>';
            }

            document.getElementById('contenidoJson').innerHTML = contenido;
        }

        xhttp.open("GET", "/docs/colores.json", true);
        xhttp.send();
    });
});