<?php

include('../../config/config.php');
include('../../mail/mailer.php');

$codigo_recuperacao = $_POST['code'];
$senha_descrip = $_POST['senha'];
$senha = password_hash($senha_descrip, PASSWORD_DEFAULT);
$response = '';

$sql = mysqli_query($mysqli, "UPDATE usuarios SET senha = '$senha' WHERE codigo_recuperacao = '$codigo_recuperacao'");

if($sql){
    $limpar_codigoVerficacao = mysqli_query($mysqli, "UPDATE usuarios SET codigo_recuperacao = '' WHERE codigo_recuperacao = '$codigo_recuperacao'");
    
    if($limpar_codigoVerficacao){
        $response = 'Senha alterada';
    }else{
        $response = 'Falha na recuperação';
    }
}else{
    $response = 'Falha ao alterar senha';
}

    // Retorna um JSON válido
    echo json_encode(["mensagem" => $response]);

?>