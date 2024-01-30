<?php
$usuario = $_GET['usuario'];
$clave = $_GET['clave'];

if ($usuario == "pepe" && $clave == "hola") {
    echo "usuario correcto";
} else {
    echo "usuario incorrecto";
}
?>
