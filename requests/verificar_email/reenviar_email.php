<?php

include('../../config/config.php');
include('../../mail/mailer.php');

session_start();
if (isset($_SESSION['id'])) {
    $response = '';
    $codigo_verificacao = mt_rand(100000, 999999);
    $usuario_id = $_SESSION['id'];
    $email = $_SESSION['email'];

    // Corrigindo o nome da coluna e usando prepared statements
    $stmt = $mysqli->prepare("UPDATE usuarios SET codigo_verificacao = ? WHERE usuario_id = ?");
    $stmt->bind_param("ii", $codigo_verificacao, $usuario_id);
    $update_codigo = $stmt->execute();
    $stmt->close();

    if ($update_codigo) {
        if (enviarEmail($email, "Código de verificação de e-mail", "Seu novo código verificação é: " . $codigo_verificacao)) {
            $response = 'Um novo código foi enviado ao seu E-mail!';
        } else {
            $response = 'Erro ao enviar o e-mail.';
        }
    } else {
        $response = 'Falha ao gerar novo código.';
    }

    echo json_encode(["message" => $response]);
}
?>