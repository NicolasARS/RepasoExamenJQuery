document.addEventListener('DOMContentLoaded', function () {
document.getElementById('cargarJs').addEventListener('click', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            eval(this.responseText);
        }
    };
    xhttp.open("GET", "alert.js", true);
    xhttp.send();
});
});