<?php
include('../../config/config.php');

$usuario_id = $_SESSION['id'];
$response = '';

$sql = mysqli_query($mysqli, "SELECT verificado FROM usuarios WHERE id = '$usuario_id'");

if ($sql->num_rows >= 1) {

    $row = $sql->fetch_assoc();
    $status_verificacao = $row['verificado'];

    if ($status_verificacao == 0) {
        header('Locarion: ../../pages/auth/verificar_email.php');
    }
}