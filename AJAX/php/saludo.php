<?php
// saludo.php
$nombre = $_GET['nombre'] ?? 'Invitado'; // Usa el operador de fusión null para manejar casos donde no se proporciona el nombre
echo "Hola, " . htmlspecialchars($nombre) . "!";
?>
