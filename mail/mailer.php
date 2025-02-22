<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function enviarEmail($destinatario, $assunto, $mensagem)
{
    require '../../vendor/autoload.php';
    include('credenciais.php');

    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587; // Para SSL, use 465
    $mail->SMTPAuth = true;
    $mail->Username = $username_email;
    $mail->Password = $password_email;

    // Correção no protocolo de segurança
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Para SSL na porta 465, use PHPMailer::ENCRYPTION_SMTPS

    // Se der erro de certificado, adicionar:
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($username_email, 'App Financeiro');
    $mail->addAddress($destinatario);
    $mail->Subject = $assunto;
    $mail->Body = $mensagem;

    if ($mail->send()) {
        return true;
    } else {
        return 'Erro ao enviar e-mail: ' . $mail->ErrorInfo;
    }
}
?>