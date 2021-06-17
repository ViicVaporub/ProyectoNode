<?php  
$destinatario = 'xxbreackxx111@gmail.com'

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];

$header = "Enviado desde la pagina Kamui";
$mensajeCompleto = $mensaje . "\n Atentamente: " . $nombre;
mail($destinatario, $apellido, $mensajeCompleto, $header);
echo "<script> setTimeout(\"location.href='home.component.html'\",1000)</script>"
?>