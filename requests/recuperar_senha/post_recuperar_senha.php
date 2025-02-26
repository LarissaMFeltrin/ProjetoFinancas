<?php
include('../../config/config.php');
include('../../mail/mailer.php');


$email = $_POST['email'];
$codigo_recuperacao = bin2hex(random_bytes(20));
$response = '';

$update_codigo_recuperacao = mysqli_query($mysqli, "UPDATE usuarios SET codigo_recuperacao = '$codigo_recuperacao' WHERE email = '$email'");

if($update_codigo_recuperacao){
    if (enviarEmail($email, "Link de recuperação de senha: ", 
    "O link para recuperação da senha: <a href='http://localhost/CursoDeProgramacao/website/Modulo3/pages/auth/alterar_senha.php?code=". $codigo_recuperacao ."' target='_blank'>Clique para alterar sua senha</a>")) {
        $response = 'E-mail enviado!';
    } else {
        $response = 'Erro ao enviar e-mail.';
    }

    // Retorna um JSON válido
    echo json_encode(["mensagem" => $response]);
}





?>