<?php
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $header ='From:' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por: " . $name . " \r\n";
    $mensaje .= "Su e-mail es: " . $mail ." \r\n";
    $mensaje .= "Mensaje " .$_POST['message']  ." \r\n";
    $mensaje .= "Enviado el: " . date('d/m/Y' , time());

    $para = 'lucioillanes@gmail.com';
    $asunto = 'Hornero';
    mail ($para, $asunto, utf8_decode($mensaje), $header);
    header("Location:gracias.html");
    

    ?>;