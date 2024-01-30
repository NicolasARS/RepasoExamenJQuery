document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cargarXml').addEventListener('click', function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            procesarXML(this.responseXML);
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('xml').textContent = this.responseText;
            }
        };

        function procesarXML(xml) {
            var contenido = '';
            var pizzas = xml.getElementsByTagName('pizza');
        
            for (var i = 0; i < pizzas.length; i++) {
                var nombrePizza = pizzas[i].getAttribute('nombre');
                var precioPizza = pizzas[i].getAttribute('precio');
                contenido += '<strong>Pizza: ' + nombrePizza + '</strong> - Precio: ' + precioPizza + '<br>';
        
                var ingredientes = pizzas[i].getElementsByTagName('ingrediente');
                for (var j = 0; j < ingredientes.length; j++) {
                    contenido += ' - ' + ingredientes[j].getAttribute('nombre') + '<br>';
                }
        
                contenido += '<br>'; // Espacio entre pizzas
            }
        
            document.getElementById('contenidoXml').innerHTML = contenido;
        }
        
        xhttp.open("GET", "/docs/pizzas.xml", true);
        xhttp.send();
    });    
});
